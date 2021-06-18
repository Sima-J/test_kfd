import React from 'react'
import {Image, Card, Col, Row} from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AddButton } from '../AddDonation'
import Cover from '../../assets/Pcover.png'
import Prof from '../../assets/Profile.png'
import './ProfileCard.scss'


export default function ProfileCard() {
    const { t } = useTranslation()
    return (

            <div className = "fontcolor"  >
                <div>
                    <box className= "box">
                        {t('profilecard.desc1')}
                        The main issues to solve are achieving food security,
                        end hunger improving the food nutrition.
                    </box>
                    <Image className = "cover" src={Cover} fluid/>
                </div>
            
                <div>              
                    <Card className="cardCol pt-1 " data-aos="zoom-in">

                        <div>
                            <Image src={Prof} fluid className = "profile" />
                        </div>

                        <text className= "name" >   
                            <h1 className = "align2"> 
                                {t("donationsection.supermarket")}
                            </h1> 
                        </text>   

                        <text className= "info">    
                            <h1 className = "align1"> 
                                +964 750 113 0495      
                                <br/> 
                                Iraq, Sulaymaniyah      
                            </h1> 
                        </text>

                        <br/>
                        <br/>
                        <br/>

                    </Card>

                    <Row style = {{margin: "auto"}}> 
                        <Col> <h1 className = "fontcolor"> My Donations </h1> </Col>

                        <Col ><AddButton/></Col>
                        <br/>
                    </Row>
                    
                    <div className = "MDonations" >
                        <div >
                            &nbsp;&nbsp; &nbsp;&nbsp;
                            Supply Name
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                            Quantity
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;                          
                            <FontAwesomeIcon icon = {faClock} className = "blue"/> &nbsp;
                            --Weeks-Days-Hours-Min       
                            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                
                                <button className = "Delete" type="button">
                                &nbsp; <FontAwesomeIcon icon={faTrash} /> &nbsp; 
                                    Delete &nbsp;
                                </button>
                        </div>  
                    </div>

                    <br/><br/>
                </div>
            </div>
            )}