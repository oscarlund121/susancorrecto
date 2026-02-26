"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-none", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, iconVariant, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        `group flex flex-1 items-center justify-between 
         rounded-md px-8 py-5 text-left
         bg-[#DBE1F8] 
         shadow-[0_1px_4px_rgba(0,0,0,0.06)]
         hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]
         hover:no-underline
         transition-all duration-300 ease-out
         data-[state=open]:bg-white 
         data-[state=open]:shadow-[0_4px_20px_rgba(0,0,0,0.08)]`,
        className
      )}
      {...props}>
      {children}
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-data-[state=open]:rotate-180",
        iconVariant === "featured"
          ? "bg-[#367067] group-data-[state=open]:bg-[#367067]"
          : "bg-[#367067]/10 group-data-[state=open]:bg-[#367067]"
      )}>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-all duration-300",
            iconVariant === "featured"
              ? "text-white group-data-[state=open]:text-white"
              : "text-[#367067] group-data-[state=open]:text-white"
          )} />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
