interface ThemeProps{
    theme: string
}

const Rodape: React.FC<ThemeProps> = ({ theme }) =>{
    return(
        <div className={`h-16 flex items-center justify-center px-8 ${theme}`}>
            <p>Rodape</p>
        </div>
    )
}

export default Rodape;