"use client"

import Image from "next/image"
import { memo } from "react"
import { useDispatch } from "react-redux"

import { toggleActive } from "@/redux/extensions/reducer"

import InputRadio from "../input-radio"
import RemoveButton from "../remove-button"
import { CardProps } from "./cardProps"

const Card = memo(({ name, description, logo, isActive }: CardProps) => {
  const dispatch = useDispatch()

  const handleToggleActive = () => {
    dispatch(toggleActive({ name, isActive: !isActive }))
  }

  return (
    <article
      data-testid="card"
      className="bg-background-1 flex h-[200px] w-full max-w-[382px] flex-col justify-between rounded-[20px] p-5"
    >
      <div className="flex items-start gap-4">
        <Image src={logo} alt="" width={60} height={60} />
        <div className="space-y-2">
          <h2 className="text-preset-2 text-text-color-1">{name}</h2>
          <p className="text-preset-5 text-text-color-2">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <RemoveButton />
        <InputRadio
          id={`radio-${name}`}
          isActive={isActive}
          onChange={handleToggleActive}
        />
      </div>
    </article>
  )
})
Card.displayName = "Card"

export default Card
