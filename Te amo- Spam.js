async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

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
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
