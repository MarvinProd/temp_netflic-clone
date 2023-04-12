

import './Body.css'
import Heading from '../../components/Heading/Heading'
import netflix from '../../assets/netflix.mp4'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import List from '../../components/List/List'
import {AiOutlineRight} from 'react-icons/ai'
import Footer from '../../components/Footer/Footer'

function Body() {




  return (
    <div className='app__body'>

      <div className='app__top'>
        <Heading
        title='Enjoy on your TV.' 
        text='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />
      
        <div className='tv__bg' >
        <video  autoPlay loop muted src={netflix} />
        </div> 
      </div>

      <div className='app__top'>
      <img src={img1} alt=''/>
        <Heading
        title='Download your shows to watch offline.' 
        text='Save your favorites easily and always have something to watch.' />
      
      </div>

      <div className='app__top_next'>
        <Heading
        title='Watch everywhere.' 
        text='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
      
      </div>

      <div className='app__top'>
      <img src={img2} alt=''/>
        <Heading
        title='Create profiles for kids.' 
        text='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' />
      
      </div>

      <div className='app__top_end'>

        <h1>
          Frequently Asked Questions
        </h1>

        <div className='app__list_'>

        <List title='What is Netflix?'
        text1='Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
        text2="You can watch as much as you want, whenever you want without a single commercial  all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week" />

        <List title='How much does Netflix cost?'
        text1='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.'/>
        <List title='Where can I watch?' 
        text2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        text1='Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.' />

        <List title="How do I cancel?" 
        text1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />

        <List title='What can I watch on Netflix?' 
        text1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        />

        <List title='Is Netflix good for kids?' 
        text1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
        text2='Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
        />

        <div>

        <div className='custom__header_top'>

            <p className='p__opensans'> 
                Ready to watch? Enter your email to create or restart your membership</p>
        </div>

        <div className=" top__fix app__header-input flex__center">
            <input type="email" placeholder="Enter your email address" />
            <div className='app__svg'> 
                <p>Get Started</p>
                <AiOutlineRight/>
            </div>

        </div>
  
        </div>




    </div>
      </div> 



      <div className='app__footer'>
        <Footer/>
       
      </div>
      
    </div>
)}

export default Body
