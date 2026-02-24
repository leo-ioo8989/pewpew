function goTo(p){location.href=p}

/* BGM */
const bgm=document.getElementById("bgm");
if(bgm){
 const t=localStorage.getItem("bgm-time");
 if(t) bgm.currentTime=parseFloat(t);
 bgm.volume=.5;
 bgm.play().catch(()=>{});
 setInterval(()=>localStorage.setItem("bgm-time",bgm.currentTime),1000);
}

/* Letter typing */
const typed=document.getElementById("typedText");
const text="Sun na I know that I am not perfect I get jealous too easily, sometimes I can't express how I feel, I can't give you my 100% all the time , i apologize for everything , i overthinks a lot , I am quiet when I am upset , i constantly need reassurance, But I am trying my best to keep you happy.Full try.but I don't know how I will explain this to you but I am working on myself let's hope that one day I will be capable of doing things which currently I can't...But at the end I love you the most ye dekh khudse likha hai chat gpt se polish karayi hai kyonki tu ye padhte padhte bhi meri grammer na sudhare dekh me overthink bahut karta hu sorry dekh jaise parso tune call nahi uthayi mera pagal man kuch bhi soch raha thaaa kuch bhi soch letaaa me sorry uske liye ab tune call cut kar diya mujhe lag raha tu gussa hai isliye ye chota sa mota sa source code bana diyaaa love you yawr woh gc me isliye bolta ki idk kitu kya chah rahi ha relationship private rakhna ki kya nahi pata mujhe isliye bolta rehta if you want ki me bata du gc me toh bhi me ready tu bol toh teri id toh bio me bhi likh du I don't want to lose you .agar kabhi kuch ho toh kuch chupana mat agar meri kuch baat buri lage ya kuch accha na lage toh bata dena agar koi ladka tujhe pasandaaye tujhe koi accha lagne lage toh bata dena and at last i love you so much yawA ❤️";

if(typed){
 let i=0;
 const t=setInterval(()=>{
  if(i<text.length) typed.textContent+=text[i++];
  else clearInterval(t);
 },40);
}

/* Sprite logic */
const sprite=document.getElementById("sprite");
const dialogue=document.getElementById("dialogue");
const choices=document.getElementById("choices");
const sadWrap=document.getElementById("sadWrap");
const sadVideo=document.getElementById("sadVideo");

if(sprite){
 sprite.addEventListener("animationend",()=>{
  if(sprite.classList.contains("sprite-before")){
    dialogue.textContent="Will you forgive me? 🥺";
    dialogue.classList.remove("hidden");

    choices.innerHTML=`
      <button onclick="forgiveYes()">Yes ❤️</button>
      <button onclick="forgiveNo()">No 😢</button>
    `;
    choices.classList.remove("hidden");
  }
 });
}

function forgiveYes(){
 sprite.classList.replace("sprite-before","sprite-after");
 dialogue.classList.add("hidden");
 choices.classList.add("hidden");

 sprite.addEventListener("animationend",()=>goTo("gift.html"),{once:true});
}

function forgiveNo(){
 sadWrap.classList.remove("hidden");
 sadVideo.play();
 dialogue.classList.add("hidden");
 choices.classList.add("hidden");
 sadVideo.onended=()=>goTo("final.html");
}

/* Gift countdown */
function startCountdown(){
 const c=document.getElementById("countdown");
 const v=document.getElementById("giftVideo");
 const wrap=v.parentElement;

 c.classList.remove("hidden");
 let n=3;
 c.textContent=n;

 const t=setInterval(()=>{
  n--;
  c.textContent=n;

  if(n===0){
    clearInterval(t);
    c.classList.add("hidden");
    wrap.classList.remove("hidden");
    v.play();
    v.onended=()=>document.getElementById("continueBtn").classList.remove("hidden");
  }
 },1000);
}