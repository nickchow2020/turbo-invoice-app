import { Label } from "@/components/components/ui/label";
import { cn } from "../lib/utils";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/components/ui/select";

export function SelectColumn({
    title,
    labelClassName,
    selectorClassName,
    placeholder,
    className,
    dropdownItems,
}: {
    className?: string;
    labelClassName?: string;
    selectorClassName?: string;
    title: string;
    value?: string;
    placeholder?: string;
    dropdownItems?: string[];
}) {
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
            <Select>
                <SelectTrigger className={cn("w-[180px]", selectorClassName)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {dropdownItems?.map((item, index) => (
                        <SelectItem key={index} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
