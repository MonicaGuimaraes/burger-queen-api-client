
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponente(){
  
    return (
       
        <Carousel
          
          
          infiniteLoop
        //   emulateTouch
          autoPlay
          useKeyboardArrows
          transitionTime={1000}
        //   axis="vertical"
          // selectedItem={1}
          width="80vw"
          
        >
          <div className="slide-holder">
            <img
              alt=""
              src="https://cdn.discordapp.com/attachments/951913651059716138/984263104558948434/2307988_1eb6a47e795ab2e_1.png"
            />
    
          </div>
          <div className="slide-holder">
            <img
              alt=""
              src="https://cdn.discordapp.com/attachments/951913651059716138/984263204903456768/korin-hamburguer-picanha-faca-20190704-horizontal_2.png"
            />
            
          </div>
          <div className="slide-holder">
            <img
              alt=""
              src="https://cdn.discordapp.com/attachments/951913651059716138/984263230903971850/hamburguer-angus-fatias-redondas-bacon-mobile.jpg"
            />

          </div>
        </Carousel>
     
    );

}
