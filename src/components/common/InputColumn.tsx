import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import { cn } from "../lib/utils";

export function InputColumn({
    className,
    labelClassName,
    inputClassName,
    title,
    value,
    defaultValue,
    placeholder,
    inputType = "text",
}: {
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    title: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    inputType?: string;
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
            <span>:</span>
            <Input
                value={value}
                defaultValue={defaultValue}
                className={cn("ml-2 w-40", inputClassName)}
                placeholder={placeholder}
                id={title}
                type={inputType}
            />
        </div>
    );
}
