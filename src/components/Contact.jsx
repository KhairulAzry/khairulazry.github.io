import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'; // Web3Forms free-plan key

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [hToken, setHToken] = React.useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!hToken) {
      toast.error("Please complete the captcha");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    // get your own access key here: https://web3forms.com/

    // Web3Forms expects this exact field name:
    formData.append("h-captcha-response", hToken);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      setHToken(null); // optional: force new solve next time
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mc-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Me</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Let's create something awesome together</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='w-full text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full text-left'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required/>
            </div>
        </div>
        <div className='my-6 text-left'>
            Message 
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name="Message"placeholder='Message' required></textarea>
        </div>
         {/* hCaptcha widget */}
        <div className="my-6 flex justify-center">
          <HCaptcha
            sitekey={HCAPTCHA_SITEKEY}
            reCaptchaCompat={false}
            onVerify={(token) => setHToken(token)}
            onExpire={() => setHToken(null)}
            onError={() => setHToken(null)}
          />
        </div>

        <button
          className='bg-blue-600 text-white py-2 px-12 mb-10 rounded disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={!hToken || !!result}
        >
          {result ? result : "Send Message"}
        </button>
      </form>
      
    </motion.div>
  )
}

export default Contact
