import styled from 'styled-components';

const Layout = styled.header`
    a {
        color: #000000;
        text-decoration: none;
    }
    .showcase {
        width: 100%;
        height: 550px;
        background: url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')no-repeat center center/cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: flex-end;
        padding-bottom: 250px;
        margin-bottom: 20px;
        color: #ffffff;    
        
    }



    .flip-card-front img{
        width: 100%;
        height: 180px;
        border-radius:10px;
    }

    .flip-card {
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding-bottom: 250px;
        margin-bottom:100px;
        border-radius: 10px;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
        }
        /* This container is needed to position the front and back side */
        .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        }

        /* Do an horizontal flip when you move the mouse over the flip box container */
        .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
        }

        /* Position the front and back side */
        .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 180px;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        }

        /* Style the front side (fallback if image is missing) */
        .flip-card-front {
        background-color: #000000;
        color: black;
        }

        /* Style the back side */
        .flip-card-back {
        background-color: #000000;
        color: white;
        border-radius:10px; 
        transform: rotateY(180deg);
        }






    .btn {
        cursor: pointer;
        display: inline-block;
        border:0;
        padding: 10px 20px;
        background: #314FE5;
        color:#ffffff;
        font-size: 15px;
        margin: 10px 0;
    }
    .btn:hover {
        opacity: .4
    }
    .content-header {
        margin-bottom: 10px;
        padding: 10px 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 10px 10px;
    }
    .container {
        width: 100%;
        margin: auto;
    }
    /* News Cards */
    .news-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin: 40px 0;
    
    }
    .news-cards img {
    width: 100%;
    height: 180px;
    }
    .news-cards h3 {
    font-size: 20px;
    margin: 1px 0;
    
    }
    .news-cards p {
    font-size: 13px;
    margin: 7px 0;
    
    }
    .news-cards a {
    color: #f2f2f2;
    text-transform: uppercase;
    display: inline-block;
    font-weight: bold;
    }
    /* CARDS BANNER ONE */
.cards-banner-one {
  width: 100%;
  height: 350px;
  background: url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  margin-bottom: 40px;
}
.cards-banner-one .content {
  width: 40%;
  padding: 40px 0 0 30px;
  color: #fff;
}
.cards-banner-one p,
.cards-banner-two p {
  margin: 10px 0 20px 0;
}
/* CARDS BANNER TWO*/
.cards-banner-two {
    width: 100%;
  height: 350px;
  background: url("https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  margin-bottom: 40px; 
  }
.cards-banner-two .content {
    width: 40%;
    padding: 40px 0 0 30px;
    color: #fff;
}
/* Follow */
.social {
  margin: 50px;
}
.social p {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;

}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

}
.links a {
  margin: 0 30px;
}
.links a i {
  font-size: 3rem;
}
/* Links */
.footer-links {
  background: #2f3640;
  color: #616161;
  font-size: 12px;
  padding: 35px 0;
}
.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
}
.footer-container ul {
  margin: 0 auto;
}
.footer-links li {
  line-height: 2.8;
}
.footer {
  background: #2f3640;
  color: #616161;
  font-size: 12px;
  padding: 20px 0;
  text-align: center;
  font-size: 1rem;
  padding-bottom: 20px;
}
/* Mobil */
@media (max-width: 800px) {
    
  .menu-btn {
    display: block;
  }
  .menu-btn:hover {
    opacity: 0.5;
  }
  .nav-main ul.nav-menu {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #2f3640;
    width: 50%;
    height: 100%;
    border-right: #ccc 1px solid;
    opacity: 0.9;
    padding: 30px;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
  }
  .nav-main ul.nav-menu li {
    padding: 20px;
    border-bottom: #ccc solid 1px;
    font-size: 14px;
  }
  .nav-main ul.nav-menu li:last-child {
    border-bottom: 0;
  }
  .nav-main ul.nav-menu.show {
    transform: translateX(-20px);
  }
  .nav-main ul.nav-menu-right {
    margin-right: 50px;
  }
  .news-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .cards-banner-one .content,
  .cards-banner-two .content {
    width: 80%;
  }
  .footer-links .footer-container p{
    grid-template-columns: repeat(2, 1fr);
    
  }
}
@media (max-width: 500px) {
  .news-cards {
    grid-template-columns: 1fr;
  }
  .cards-banner-one .content,
  .cards-banner-two .content {
    width: 100%;
    padding: 60px 20px;
  }
  .footer-links .footer-container {
    grid-template-columns: 1fr;
  }
  .footer-links .footer-container p {
    text-align: center;
  }
}

`
;
export default Layout;
