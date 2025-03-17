function Button({ Nombre, Funcion }) {
    return (
        <button title={Nombre} onClick={Funcion}>
            {Nombre}
        </button>
    );
}

export default Button;