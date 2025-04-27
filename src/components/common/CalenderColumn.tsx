"use client";

import { Label } from "@/components/components/ui/label";
import { cn } from "../lib/utils";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/components/ui/button";
import { Calendar } from "@/components/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/components/ui/popover";
import { useState } from "react";

export function CalenderColumn({
    title,
    labelClassName,
    placeholder,
    className,
}: {
    className?: string;
    labelClassName?: string;
    selectorClassName?: string;
    title: string;
    value?: string;
    placeholder?: string;
}) {
    const [date, setDate] = useState<Date>();

    return (
        <div className={cn("flex items-center mb-3", className)}>
            <Label
                htmlFor={title}
                className={cn(
                    " whitespace-nowrap font-bold text-[14px] w-15",
                    labelClassName
                )}
            >
                {title}
            </Label>
            <span className="mr-2">:</span>

            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date ? (
                            format(date, "yyyy-MM-dd")
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
