"use client"

import { useSelector } from "react-redux"

import useGetData from "@/hooks/useGetData"
import { RootState } from "@/redux/redux.types"

import Card from "../card"

const ExtensionsList = () => {
  useGetData()

  const { extensions, filter } = useSelector(
    (rootState: RootState) => rootState.extensionsSlice,
  )

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "all") return true
    if (filter === "active") return extension.isActive
    if (filter === "inactive") return !extension.isActive
  })

  return (
    <section className="mt-8">
      <ul className="flex flex-wrap justify-center gap-3 lg:justify-start">
        {filteredExtensions.map((extension, index) => (
          <Card
            key={`${index}-${extension.name}`}
            name={extension.name}
            description={extension.description}
            logo={extension.logo}
            isActive={extension.isActive}
          />
        ))}
      </ul>
    </section>
  )
}

export default ExtensionsList
