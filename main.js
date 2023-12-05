
const modal = document.querySelector('#modal')
const palavraBotao = document.querySelector('#palavra-botao')
const fundo = document.querySelector('.fundo')
const close = document.querySelector('.close')
const seta = document.querySelector('.seta')
const seta2 = document.querySelector('.seta-cima')

const fraseIngles = document.querySelector('.frase-ingles')
const frasePt = document.querySelector('.frase-pt')
const audioFrase = document.querySelector('.audio-frase')
const audioIngles = document.querySelector('.audio-ingles')
const palavraIngles = document.querySelector('.palavra-ingles')
const textoIngles = document.querySelector('.texto-ingles')
const palavraPt = document.querySelector('.palavra-pt')
const textoPt = document.querySelector('.texto-pt')
const classeIngles = document.querySelector('.classe-ingles')
const classePt = document.querySelector('.classe-pt')

const dialogo = document.querySelector('.dialogo')
const conto = document.querySelector('.mensagem')

close.addEventListener('click', (e) => {
    modal.style.visibility = 'hidden'
    fundo.style.visibility = 'hidden'
})

function playAudio(botao, arquivo) {
    const audio = new Audio(arquivo)
    botao.addEventListener("click", function play() {
        audio.load();
        audio.play(); 
        botao.removeEventListener("click", play)
})  
}

seta.addEventListener('click', (e) => {
dialogo.style.visibility = 'visible'
seta.style.visibility = 'hidden'
seta2.style.visibility = 'visible'})

seta2.addEventListener('click', (e) => {
    dialogo.style.visibility = 'hidden'
    seta.style.visibility = 'visible'
    seta2.style.visibility = 'hidden'})
     

palavraBotao.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = 'Burglary'
    textoIngles.textContent = 'the crime of illegally entering a building and stealing things;'
    palavraPt.textContent = 'Roubo'
    textoPt.textContent = 'o crime de entrar ilegalmente um lugar e roubar coisas;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: My cousin was involved in a burglary.'
    frasePt.textContent = 'ex: Meu primo estava envolvido em um roubo.'
    conto.textContent = 'A maldição agora recaía sobre Sabrina, atraída pelo roubo do livro.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'

    playAudio(audioIngles, "./audios/Burglary.m4a")
    playAudio(audioFrase, "./audios/frase Burglary.m4a")
    
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'
})
    

const palavraBotao2 = document.querySelector('#palavra-botao2')
palavraBotao2.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Genuinely"
    textoIngles.textContent = "truthfully; sincerely; really; actually;"
    palavraPt.textContent = 'Genuinamente'
    textoPt.textContent = 'verdadeiramente; sinceramente; realmente; efetivamente;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: I feel genuinely happy for you.'
    frasePt.textContent = 'ex: Eu me sinto genuinamente feliz por você.'
    conto.textContent = 'Decidiu explorar os cantos mais sombrios da cidade em busca de experiências genuinamente assustadoras no Halloween.'
    classeIngles.textContent = 'adverb'
    classePt.textContent = 'advérbio'

    playAudio(audioIngles, "./audios/Genuinely.m4a")
    playAudio(audioFrase, "./audios/frase Genuinely.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})



const palavraBotao3 = document.querySelector('#palavra-botao3')
palavraBotao3.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Regardless"
    textoIngles.textContent = "despite; not being affected by something;"
    palavraPt.textContent = 'Apesar de'
    textoPt.textContent = 'sem considerar; não ser afetado por alguma coisa;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = "ex: Regardless of the rain, it's a beautiful day."
    frasePt.textContent = 'ex: Apesar da chuva, é um dia bonito.'
    palavraIngles.textContent = "Regardless"
    conto.textContent = 'Sem considerar os avisos antigos sobre o lugar, Sabrina decidiu entrar.'
    classeIngles.textContent = 'adjective & adverb'
    classePt.textContent = 'adjetivo e advérbio'
    
    playAudio(audioIngles, "./audios/Regardless.m4a")
    playAudio(audioFrase, "./audios/frase Regardless.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})

const palavraBotao4 = document.querySelector('#palavra-botao4')
palavraBotao4.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Massachusetts"
    textoIngles.textContent = "a state in the northeastern US, whose capital city is Boston;"
    palavraPt.textContent = 'Massachusetts'
    textoPt.textContent = 'um estado no nordeste dos EUA, cuja capital é Boston;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = "ex: We're travelling to Massachusetts next week."
    frasePt.textContent = 'ex: Estaremos viajando para Massachusetts na próxima semana.'
    conto.textContent = 'O Dia das Bruxas era especialmente assombrado na cidade de Salem, local marcado pelos julgamentos da caça às bruxas no passado, no estado de Massachusetts.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'
    
    playAudio(audioIngles, "./audios/Massachusetts.m4a")
    playAudio(audioFrase, "./audios/frase Massachusetts.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})


const palavraBotao5 = document.querySelector('#palavra-botao5')
palavraBotao5.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Development"
    textoIngles.textContent = "the process in which someone or something grows or changes and becomes more advanced;"
    palavraPt.textContent = 'Desenvolvimento'
    textoPt.textContent = 'o processo no qual alguém ou algo cresce ou muda e se torna mais avançado;'
    fundo.style.visibility = 'visible'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: The development of the project is going well.'
    frasePt.textContent = 'ex: O desenvolvimento do projeto está indo muito bem.'
    conto.textContent = '- Certo. Sabrina, estávamos muito contentes com seu desenvolvimento nas consultas.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'
    
    playAudio(audioIngles, "./audios/Development.m4a")
    playAudio(audioFrase, "./audios/frase Development.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})

const palavraBotao6 = document.querySelector('#palavra-botao6')
palavraBotao6.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Disappointment"
    textoIngles.textContent = "the feeling of being disappointed; something or someone that is not what you were hoping it would be;"
    palavraPt.textContent = 'Desapontamento'
    textoPt.textContent = 'a sensação de estar decepcionado; algo ou alguém que não é o que você esperava que fosse;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: Anyone could see the disappointment on her face.'
    frasePt.textContent = 'ex: Qualquer pessoa poderia vez o desapontamento no seu rosto.'
    conto.textContent = '- perguntou o psicólogo, o desapontamento explícito em seu rosto.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'
   
    playAudio(audioIngles, "./audios/Disappointment.m4a")
    playAudio(audioFrase, "./audios/frase Disappointment.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})


const palavraBotao7 = document.querySelector('#palavra-botao7')
palavraBotao7.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Murderer"
    textoIngles.textContent = "someone who illegally and intentionally kills another person;"
    palavraPt.textContent = 'Assassino(a)'
    textoPt.textContent = 'alguém que mata outra pessoa ilegal e intencionalmente;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: He was accused of being a murderer.'
    frasePt.textContent = 'ex: Ele foi acusado de ser um assassino.'
    palavraIngles.textContent = "Murderer"
    conto.textContent = 'Onde uma bruxa foi acusada injustamente de ser uma assassina.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'

    playAudio(audioIngles, "./audios/Murderer.m4a")
    playAudio(audioFrase, "./audios/frase Murderer.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})


const palavraBotao8 = document.querySelector('#palavra-botao8')
palavraBotao8.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Psychologist"
    textoIngles.textContent = "someone who studies the human mind and human emotions and behaviour, and how different situations have an effect on people;"
    palavraPt.textContent = 'Psicólogo'
    textoPt.textContent = 'alguém que estuda a mente humana e as emoções e comportamento humanos, e como diferentes situações afetam as pessoas'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: The psychologist asked me a lot of questions about my life.'
    frasePt.textContent = 'ex: O psicólogo me perguntou muitas questões sobre minha vida.'
    conto.textContent = 'Sabrina ficou quieta o caminho inteiro até seu psicólogo. '
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'

    playAudio(audioIngles, "./audios/Psychologist.m4a")
    playAudio(audioFrase, "./audios/frase Psychologist.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})


const palavraBotao9 = document.querySelector('#palavra-botao9')
palavraBotao9.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Rarely"
    textoIngles.textContent = "on very few occasions; almost never;"
    palavraPt.textContent = 'Raramente'
    textoPt.textContent = 'em muito poucas ocasiões; quase nunca;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = 'ex: I rarely go back to my hometown'
    frasePt.textContent = 'ex: Eu raramente volto para a minha cidade natal.'
    conto.textContent = 'Uma loja de antiguidades sombria e abandonada, conhecida por ser assombrada, raramente alguém entrava lá.'
    classeIngles.textContent = 'adverb'
    classePt.textContent = 'advérbio'

    playAudio(audioIngles, "./audios/Rarely.m4a")
    playAudio(audioFrase, "./audios/frase Rarely.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})
    

const palavraBotao10 = document.querySelector('#palavra-botao10')
palavraBotao10.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.visibility = 'visible'
    palavraIngles.textContent = "Rythm"
    textoIngles.textContent = "a strong pattern of sounds, words, or musical notes that is used in music, poetry, and dancing;"
    palavraPt.textContent = 'Ritmo'
    textoPt.textContent = 'um forte padrão de sons, palavras ou notas musicais usado em música, poesia e dança;'
    fundo.style.visibility = 'visible'
    fraseIngles.textContent = "ex: That song's rhythm was horrible."
    frasePt.textContent = 'ex: O ritmo daquela música era horrível.'
    conto.textContent = 'Saiu correndo da loja, em um ritmo frenético.'
    classeIngles.textContent = 'noun'
    classePt.textContent = 'substantivo'

    playAudio(audioIngles, "./audios/Rhythm.m4a")
    playAudio(audioFrase, "./audios/frase Rythm.m4a")
    dialogo.style.visibility = 'visible'
    seta.style.visibility = 'hidden'
    seta2.style.visibility = 'visible'})


