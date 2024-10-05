import { ReactNode } from "react"
import styles from "./index.module.css"
import { Lock, Mail, Search, Phone } from "lucide-react"

enum InputIcon {
    SEARCH
}

type InputProps = {
    type: "text"|"password"|"email"|"search"|"tel",
    placeholder: string,
    icon?: InputIcon,
    disabled?: boolean,
    value: number|string,
    setValue: (val: string)=>void
    min?: number,
    max?: number
}

const Input = ({ type="text", placeholder, disabled, value, setValue, icon, min=1, max }:InputProps) => {
    // export let focus: (()=>void)|undefined = undefined;
    // export let blur: (()=>void)|undefined = undefined;
    const id = Math.random() + "";

    const iconType: {[key: string]: ReactNode} = {
        "password": <Lock />,
        "email": <Mail />,
        "search": <Search />,
        "tel": <Phone />
    }

    return (
        <div className={styles.wrap_outter}>
            <div className={styles.wrap_inner}>
                <input min={min} max={max} step="1" type={type} className={value !== "" ? styles.active : ""} id={id} value={value} onChange={(e)=>setValue(e.target.value)} disabled={disabled} />
                <label htmlFor={id} className={`${styles.placeholder} ` + (value !== "" ? styles.hide : "")}>{placeholder}</label>
                {(icon || iconType[type]) &&
                    <span className={styles.icon}>
                        {icon || iconType[type]}
                    </span>
                }
            </div>
        </div>
    )
}

export default Input