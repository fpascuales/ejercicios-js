//Crear función estadoCieloToEmoji que dado un estado de cielo, nos devuelva el emoji correspondiente
export const estadoCieloToEmoji = (cielo) => {
    let emoji = ''
    switch (cielo) {
        case 'soleado':
            emoji = '☀️'
            break
        case 'nublado':
            emoji = '☁️'
            break
        case 'lluvioso':
            emoji = '🌧️'
            break
    }
    return emoji
}
