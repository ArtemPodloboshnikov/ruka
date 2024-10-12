"use client"
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import styles from "./index.module.css"
import { LucideProps } from "lucide-react";

type SwitcherProps = {
    value: string|boolean,
    text?: string,
    options?: string[],
    setOptions?: (opts: string[])=>void,
    callback?: ()=>void,
    Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const Switcher = ({ text="", value, options=[], setOptions, callback, Icon }:SwitcherProps) => {
    const [isChecked, setIsChecked] = useState(typeof value === "boolean" ? value : options.includes(value))
    const handleCheck = () => {
        if (typeof value === "boolean") {
            setIsChecked(!isChecked);
        } else if (setOptions) {
            if (options.includes(value)) {
                setOptions(options.filter((val)=>val!==value))
                setIsChecked(false)
            } else {
                setOptions([...options, value])
                setIsChecked(true)
            }
        }
        console.log(options)

        if (callback) callback()
    }

    return (
        <div className={styles.wrap} style={typeof value !== "boolean" ? { width: `${value.length * 13}px` } : {}}>
            <input checked={isChecked} onChange={handleCheck} type="checkbox" className={styles.input} />
            <div className={styles.circle} />
            <div className={[styles.text, styles.on].join(" ")}>
                {Icon ?
                    <div style={{marginTop: "5px"}}>
                        <Icon />
                    </div>
                :
                    (text ? text : value)
                }
            </div>
            <div className={[styles.text, styles.off].join(" ")}>
                {Icon ?
                    <div style={{marginTop: "5px"}}>
                        <Icon />
                    </div>
                :
                    (text ? text : value)
                }
            </div>
            <div className={styles.background}></div>
        </div>
    )
}

export default Switcher