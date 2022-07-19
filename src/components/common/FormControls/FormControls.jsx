import React from "react";
import styles from './FormControls.module.css'


const FormControl = ({children, meta: {touched, error}}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>

    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}




