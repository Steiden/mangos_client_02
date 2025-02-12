"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "./button" 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"
import clsx from "clsx"
import { cn } from "@/shared/lib/utils"

export type ComboBoxItem = {
    value: string;
    label: string;
}

type Props = React.HTMLAttributes<HTMLButtonElement> & {
    items?: ComboBoxItem[];
    placeholder?: string;
    defaultValue?: string;
    onChange?: (value: string) => any;
}

export function Combobox({ items, placeholder, defaultValue, onChange, className, ...rest }: Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx("w-[100%] justify-between", className)}
          {...rest}
        >
          {value
            ? items?.find((item) => item.value === value)?.label
            : defaultValue ? defaultValue : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100%] p-0">
        <Command>
          <CommandInput placeholder="Поиск..." />
          <CommandList>
            <CommandEmpty>Не найдено</CommandEmpty>
            <CommandGroup>
              {items?.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue: any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    onChange?.(currentValue)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
