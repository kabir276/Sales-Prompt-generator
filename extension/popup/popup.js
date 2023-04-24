const btnsubmit = document.querySelector('#btn_prompt');
const input = document.querySelector('input');
const [currentTab]= await chrome.tabs.query({active:true,currentWindow:true})

btnsubmit.addEventListener("click",async () =>{
  const data= input.value;
  await chrome.tabs.sendMessage(currentTab.id,{action:"prompt",message:data})
})
