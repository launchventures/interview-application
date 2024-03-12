import styles from "./styles.module.scss";

const CustomButton = ({ title, type, theme, customClass, ...props }) => {
    return (
        <button
            className={`${styles.button} font-base ${styles[theme]} ${
                customClass ? customClass : "m-0"
            }`}
            type={type}
            {...props}
        >
            {title}
        </button>
    );
};

export default CustomButton;
