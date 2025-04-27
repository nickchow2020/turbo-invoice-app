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
        <div className={cn("flex flex-col items-start  mb-3", className)}>
            <div className="flex items-center mb-2">
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
            </div>
            <Textarea
                placeholder={placeholder}
                className={cn("h-50", textareaClassName)}
            />
        </div>
    );
}
