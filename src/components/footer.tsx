interface ThemeProps{
    theme: string
}

const Rodape: React.FC<ThemeProps> = ({ theme }) =>{
    return(
        <div className={`h-16 flex items-center justify-center px-8`}>
            <p className="text-4xl font-bold">Rodape</p>
        </div>
    )
}

export default Rodape;