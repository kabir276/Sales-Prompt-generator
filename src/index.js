class chatGPTextention{
  constructor(){
    this.handleRequest();

  }

  handleRequest(){
    
  chrome.runtime.onMessage.addListener(async (request,sender,response)=>{
    if(request.action="prompt") this.prompttochatgpt()
  
  })
}
prompttochatgpt(){
   chrome.runtime.onMessage.addListener(async (request,sender,response)=>{
  const prompt= request.message;
  document.querySelector('textarea').click()
  const input=document.querySelector('textarea')
  input.value=`I want you to act as a sales marketing expert and help me write a sales email to potential customers for my new product. ${prompt}. The email should be persuasive and informative, highlighting the unique features and benefits of the product. Please include a strong call to action to encourage potential customers to make a purchase.`
  document.querySelector("textarea~button").click()

   })
}
 
}

const CGPTextention=  new chatGPTextention()



