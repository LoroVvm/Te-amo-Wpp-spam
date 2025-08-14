(async () => {
    const texto = `
Africâner: Ek het jou lief

Albanês: Të dua

Amárico (Etiópia): Afekrishalehou

Árabe: Ana behibek

Armênio: Yes kez sirumen

Assamês: Moi tomak bhal pau

Azerbaijano: Mən səni sevirəm

Basco: Maite zaitut

Bemba: Ndeku Temwo

Bengali: Ami tomake bhalobashi

Birmanês: Chit pa de

Bosnio: Volim te

Búlgaro: Obicham te

Cantonês: Ngo oi ney

Catalão: T'estimo

Cebuano: Gihigugma ko ikaw

Cherokee: Tsi ge yu i

Chinês (Mandarim): Wǒ ài nǐ

Coreano: Saranghae

Corso: Ti tengu caru

Crioulo Haitiano: Mwen renmen ou

Croata: Volim te

Dinamarquês: Jeg elsker dig

Dzongkha (Butão): Nga chea kye rang gha

Eslovaco: Ľúbim ťa

Esloveno: Ljubim te

Espanhol: Te amo

Esperanto: Mi amas vin

Estoniano: Ma armastan sind

Faroês: Eg elski teg

Filipino: Mahal kita

Finlandês: Minä rakastan sinua

Francês: Je t'aime

Frísio: Ik hâld fan dy

Galego: Quérote

Galês: Rwy'n dy garu di

Georgiano: Mikvarhar

Grego: S'agapó

Gujarati: Hoo thunay prem karoo choo

Havaiano: Aloha au ia 'oe

Hebraico: Ani ohev otakh

Hindi: Main tumse pyar karta hoon 

Holandês: Ik hou van je

Húngaro: Szeretlek

Ibo (Nigéria): A hụrụ m gị n'anya

Icelandês: Ég elska þig

Indonésio: Aku cinta kamu

Inglês: I love you

Inuktitut: Nagligivagit

Irlandês: Tá grá agam ort

Italiano: Ti amo

Japonês: Aishiteru

Kannada: Naanu ninna preetisuttene

Khmer: Khnhom sralanh anak

Latim: Te amo

Letão: Es tevi mīlu

Lituano: Aš tave myliu

Luxemburguês: Ech hunn dech gär

Macedônio: Te sakam

Malagaxe: Tiako ianao

Malaio: Aku cinta padamu

Maltês: Inhobbok

Navajo: Ayor anosh'ni

Norueguês: Jeg elsker deg

Persa: Dooset daram

Polonês: Kocham cię

Português: Eu te amo

Romeno: Te iubesc

Russo: Ya lyublyu tebya

Samoano: Ou te alofa ia te oe

Sérvio: Volim te

Shona: Ndinokuda

Sioux: Techihhila

Somali: Waan kujeclahay

Sueco: Jag älskar dig

Suaíli: Nakupenda

Tagalo: Mahal kita

Tailandês: Phom rak khun

Tâmil: Naan unnai kathalikirean

Tcheco: Miluji tě

Telugu: Nenu ninnu premistunnanu

Turco: Seni seviyorum

Ucraniano: Ya tebe kahayu

Urdu: Main ap say muhabat karta hoon 

Vietnamita: Anh yêu em 

Yorubá: Mo ni fe

Zulu: Ngiyakuthanda
`;

    const lines = texto.split('\n').map(l => l.trim()).filter(l => l);
    const main = document.querySelector("#main");
    const textarea = main.querySelector('[contenteditable="true"]');

    if (!textarea) throw new Error("Não há uma conversa aberta");

    for (const line of lines) {
        textarea.focus();
        document.execCommand("insertText", false, line);
        textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

        
        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter', code: 'Enter' });
        textarea.dispatchEvent(event);

        await new Promise(r => setTimeout(r, 500)); 
    }

    console.log(`Código finalizado, ${lines.length} mensagens enviadas`);
})();
