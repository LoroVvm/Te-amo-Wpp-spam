(async () => {
    const texto = `
I love you
Te amo
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)
আমি তোমায় ভালোবাসি (Āmi tōmāẏ bhālōbāsi)
أنا أحبك (Ana uhibbuka)
אני אוהב אותך (Ani ohev otach)
Je t’aime
Ich liebe dich
Ti amo
Eu te amo
Я тебя люблю (Ya tebya lyublyu)
我爱你 (Wǒ ài nǐ)
愛してる (Aishiteru)
사랑해 (Saranghae)
أحبك (Uḥibbuka / Uḥibbuki)
אני אוהב אותך (Ani ohev otach)
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
