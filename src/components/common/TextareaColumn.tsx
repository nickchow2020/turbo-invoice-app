import { Label } from "@/components/components/ui/label";
import { cn } from "../lib/utils";
import { Textarea } from "@/components/components/ui/textarea";

export function TextareaColumn({
    title,
    labelClassName,
    textareaClassName,
    placeholder,
    className,
}: {
    className?: string;
    labelClassName?: string;
    textareaClassName?: string;
    title: string;
    value?: string;
    placeholder?: string;
}) {
    return (
        <div className={cn("flex items-center mb-3", className)}>
            <Label
                htmlFor={title}
                className={cn(
                    " whitespace-nowrap font-bold text-[14px]",
                    labelClassName
                )}
            >
                {title}
            </Label>
            <span className="mr-2">:</span>
            <Textarea
                placeholder={placeholder}
                className={cn(textareaClassName)}
            />
        </div>
    );
}
