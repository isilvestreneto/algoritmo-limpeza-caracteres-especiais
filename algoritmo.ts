const texto = "Seu texto com acentos como á, é, í, ó, ú, ã, õ, â, ê, ô.";
const textoSemAcentos = texto.replace(/&([a-zA-Z])(grave|acute|circ|tilde|uml);/g, (match, char, accent) => {
    const accentsMap = {
        'a': { 'grave': 'à', 'acute': 'á', 'circ': 'â', 'tilde': 'ã', 'uml': 'ä' },
        'e': { 'grave': 'è', 'acute': 'é', 'circ': 'ê', 'tilde': 'ẽ', 'uml': 'ë' },
        'i': { 'grave': 'ì', 'acute': 'í', 'circ': 'î', 'tilde': 'ĩ', 'uml': 'ï' },
        'o': { 'grave': 'ò', 'acute': 'ó', 'circ': 'ô', 'tilde': 'õ', 'uml': 'ö' },
        'u': { 'grave': 'ù', 'acute': 'ú', 'circ': 'û', 'tilde': 'ũ', 'uml': 'ü' },
        'A': { 'grave': 'À', 'acute': 'Á', 'circ': 'Â', 'tilde': 'Ã', 'uml': 'Ä' },
        'E': { 'grave': 'È', 'acute': 'É', 'circ': 'Ê', 'tilde': 'Ẽ', 'uml': 'Ë' },
        'I': { 'grave': 'Ì', 'acute': 'Í', 'circ': 'Î', 'tilde': 'Ĩ', 'uml': 'Ï' },
        'O': { 'grave': 'Ò', 'acute': 'Ó', 'circ': 'Ô', 'tilde': 'Õ', 'uml': 'Ö' },
        'U': { 'grave': 'Ù', 'acute': 'Ú', 'circ': 'Û', 'tilde': 'Ũ', 'uml': 'Ü' },
        'c': { 'cedil': 'ç' },
        'C': { 'cedil': 'Ç' },
        'n': { 'tilde': 'ñ' },
        'N': { 'tilde': 'Ñ' }
    };
    return accentsMap[char][accent] || match;
});