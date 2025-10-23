/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, waitFor } from '@testing-library/react'
import React from 'react'

import RainAlert from './index'

let mockState: any
jest.mock('@/app/_store/weather', () => ({
  useWeatherStore: () => mockState.weather,
}))

describe('RainAlert', () => {
  const notificationSpy = jest.fn()
  const requestPermissionSpy = jest.fn()

  beforeEach(() => {
    jest.useFakeTimers()
    notificationSpy.mockReset()
    requestPermissionSpy.mockReset()

    // @ts-expect-error overriding in test environment
    global.Notification = Object.assign(
      function Notification(this: any, title: string, options?: any) {
        notificationSpy(title, options)
      },
      {
        permission: 'granted' as NotificationPermission,
        requestPermission: requestPermissionSpy,
      },
    )

    mockState = {
      weather: {
        current_weather: {
          time: '2025-09-23T12:00',
          temperature: 20,
          windspeed: 5,
          weathercode: 2,
        },
        hourly: {
          time: ['2025-09-23T11:00', '2025-09-23T12:00', '2025-09-23T13:00', '2025-09-23T14:00'],
          precipitation: [0, 0, 0, 0],
        },
      },
    }
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('does not trigger notification when there is no rain in the next 3h', async () => {
    render(<RainAlert />)
    await waitFor(() => {
      expect(notificationSpy).not.toHaveBeenCalled()
    })
  })

  it('triggers notification when there is rain in the next 3h and permission is already granted', async () => {
    mockState.weather.hourly.precipitation = [0, 0.1, 0, 0]

    render(<RainAlert />)

    await waitFor(() => {
      expect(notificationSpy).toHaveBeenCalled()
    })
  })

  it('asks for permission when default and triggers if user accepts', async () => {
    // @ts-expect-error change mocked permission
    global.Notification.permission = 'default'
    requestPermissionSpy.mockResolvedValue('granted')
    mockState.weather.hourly.precipitation = [0, 0.2, 0, 0]

    render(<RainAlert />)

    await waitFor(() => {
      expect(requestPermissionSpy).toHaveBeenCalled()
      expect(notificationSpy).toHaveBeenCalled()
    })
  })

  it('does not trigger if permission is denied', async () => {
    // @ts-expect-error change mocked permission
    global.Notification.permission = 'default'
    requestPermissionSpy.mockResolvedValue('denied')
    mockState.weather.hourly.precipitation = [0, 1, 0, 0]

    render(<RainAlert />)

    await waitFor(() => {
      expect(requestPermissionSpy).toHaveBeenCalled()
      expect(notificationSpy).not.toHaveBeenCalled()
    })
  })
})
