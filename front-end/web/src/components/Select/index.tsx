import React, {SelectHTMLAttributes} from 'react';
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name:string;
    options: Array<{
        id:string;
        label:string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => {
return (
    <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value='' id={name} {...rest}>
            <option value='' disabled  hidden>selecione uma opcao</option>
            {options.map(option => {
                return <option key={option.id} value={option.id}> {option.label} </option>
            })}
        </select>
    </div>
)
}

export default Select;