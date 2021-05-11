import React, { useEffect } from "react";
import {Card} from 'react-bootstrap';

export class ZoneEcrireMessage extends React.Component {

    render() {
        return (
            <>

                <Card >
                    <Card.Body>
                        <div className="d-flex flex-row pb-2">
                            <div className="mr-2"><span className="font-weight-bold">Normal </span>
                                <svg id="Group_3" data-name="Group 3" xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19">
                                    <g id="Triangle" transform="translate(0 9)">
                                        <rect id="Triangle_Background_" data-name="Triangle (Background)" width="10" height="10" fill="none" />
                                        <rect id="bound" width="10" height="10" fill="none" />
                                        <path id="Path_25" data-name="Path 25" d="M6.546-5.417a.5.5,0,0,1,.411.785L4.161-.594a.5.5,0,0,1-.822,0L.543-4.632a.5.5,0,0,1,.411-.785Z" transform="translate(1.25 7.5)" fill="#d6d6e0" />
                                    </g>
                                    <g id="Triangle-2" data-name="Triangle">
                                        <rect id="Triangle_Background_2" data-name="Triangle (Background)" width="10" height="10" fill="none" />
                                        <rect id="bound-2" data-name="bound" width="10" height="10" fill="none" />
                                        <path id="Path_25-2" data-name="Path 25" d="M6.546,5.417a.5.5,0,0,0,.411-.785L4.161.594a.5.5,0,0,0-.822,0L.543,4.632a.5.5,0,0,0,.411.785Z" transform="translate(1.25 2.5)" fill="#d6d6e0" />
                                    </g>
                                </svg>
                            </div>
                            <div className="mr-2">
                                <svg id="Bold" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect id="Bold_Background_" data-name="Bold (Background)" width="24" height="24" fill="none" />
                                    <rect id="bound" width="24" height="24" fill="none" />
                                    <path id="B" d="M6.521,14H0V0H5.563a4.288,4.288,0,0,1,4.4,4.161A3.24,3.24,0,0,1,8.916,6.566,3.594,3.594,0,0,1,11,9.84a4,4,0,0,1-1.3,2.945A4.632,4.632,0,0,1,6.521,14ZM3.334,8.321V11.1H6.208a1.4,1.4,0,1,0,0-2.78Zm0-5.442v2.78H5.188A1.435,1.435,0,0,0,6.729,4.279a1.46,1.46,0,0,0-1.542-1.4Z" transform="translate(7.34 4.8)" fill="#d6d6e0" />
                                </svg>

                            </div>

                            <div className="mr-2">
                                <svg id="Itallic" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <rect id="Itallic_Background_" data-name="Itallic (Background)" width="18" height="18" fill="none" />
                                    <rect id="bound" width="18" height="18" fill="none" />
                                    <path id="I" d="M2.25,0h1.5L1.5,10.5H0Z" transform="translate(7.5 3.75)" fill="#d6d6e0" />
                                    <g id="Group_4" data-name="Group 4" transform="translate(4.5 2.25)">
                                        <rect id="Rectangle_190" data-name="Rectangle 190" width="7.5" height="1.5" rx="0.75" transform="translate(2.25)" fill="#d6d6e0" />
                                        <rect id="Rectangle_191" data-name="Rectangle 191" width="7.5" height="1.5" rx="0.75" transform="translate(0 11.25)" fill="#d6d6e0" />
                                    </g>
                                </svg>

                            </div>
                            <div className="mr-2">
                                <svg id="Underline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect id="Underline_Background_" data-name="Underline (Background)" width="24" height="24" fill="none" />
                                    <rect id="bound" width="24" height="24" fill="none" />
                                    <rect id="Rectangle" width="13" height="1" rx="0.5" transform="translate(5 18)" fill="#d6d6e0" />
                                    <path id="U" d="M0,6.649V0H1.828V6.695a2.454,2.454,0,0,0,2.68,2.62,2.442,2.442,0,0,0,2.664-2.62V0H9V6.649A4.174,4.174,0,0,1,4.508,11,4.187,4.187,0,0,1,0,6.649Z" transform="translate(7 5.8)" fill="#d6d6e0" />
                                </svg>

                            </div>
                            <div className="mr-2">
                                <svg id="Bullet-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect id="Bullet-list_Background_" data-name="Bullet-list (Background)" width="24" height="24" fill="none" />
                                    <rect id="bound" width="24" height="24" fill="none" />
                                    <path id="Combined_Shape" data-name="Combined Shape" d="M1.5,13a1.5,1.5,0,0,1,0-3h9a1.5,1.5,0,0,1,0,3Zm0-5a1.5,1.5,0,1,1,0-3h9a1.5,1.5,0,0,1,0,3Zm0-5a1.5,1.5,0,1,1,0-3h9a1.5,1.5,0,0,1,0,3Z" transform="translate(9 5)" fill="#d6d6e0" />
                                    <path id="Combined_Shape-2" data-name="Combined Shape" d="M0,11.5A1.5,1.5,0,1,1,1.5,13,1.5,1.5,0,0,1,0,11.5Zm0-5A1.5,1.5,0,1,1,1.5,8,1.5,1.5,0,0,1,0,6.5Zm0-5A1.5,1.5,0,1,1,1.5,3,1.5,1.5,0,0,1,0,1.5Z" transform="translate(4 5)" fill="#d6d6e0" />
                                </svg>
                            </div>
                            <div className="mr-2">
                                <svg id="Bullet-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect id="Bullet-list_Background_" data-name="Bullet-list (Background)" width="24" height="24" fill="none" />
                                    <rect id="bound" width="24" height="24" fill="none" />
                                    <path id="Combined_Shape" data-name="Combined Shape" d="M1.5,13a1.5,1.5,0,0,1,0-3h9a1.5,1.5,0,0,1,0,3Zm0-5a1.5,1.5,0,1,1,0-3h9a1.5,1.5,0,0,1,0,3Zm0-5a1.5,1.5,0,1,1,0-3h9a1.5,1.5,0,0,1,0,3Z" transform="translate(9 5)" fill="#d6d6e0" />
                                    <text id="_3" data-name="3" transform="translate(5 18)" fill="#d6d6e0" font-size="4" font-family="Poppins-ExtraBold, Poppins" font-weight="800"><tspan x="0" y="0">3</tspan></text>
                                    <rect id="Rectangle_192" data-name="Rectangle 192" width="2" height="0.75" rx="0.375" transform="translate(5 8)" fill="#d6d6e0" />
                                    <g id="Group_5" data-name="Group 5" transform="translate(5 4)">
                                        <text id="_1" data-name="1" transform="translate(0 4)" fill="#d6d6e0" font-size="4" font-family="Poppins-ExtraBold, Poppins" font-weight="800"><tspan x="0" y="0">1</tspan></text>
                                        <text id="_2" data-name="2" transform="translate(0 9)" fill="#d6d6e0" font-size="4" font-family="Poppins-ExtraBold, Poppins" font-weight="800"><tspan x="0" y="0">2</tspan></text>
                                    </g>
                                </svg>
                            </div>
                            <div className="mr-2">
                                <svg id="Group_6" data-name="Group 6" xmlns="http://www.w3.org/2000/svg" width="17.256" height="14.354" viewBox="0 0 17.256 14.354">
                                    <path id="Vector" d="M3.807,3.941l-.138-.032A.749.749,0,0,1,3.3,3.693L2.266,2.6,1.007,3.646a.751.751,0,0,1-.354.163l-.176.03a.6.6,0,0,1-.238-.007A.263.263,0,0,1,.064,3.7L.029,3.632a.24.24,0,0,1,.059-.3L1.7,2,.292.512A.247.247,0,0,1,.274.194L.324.127a.308.308,0,0,1,.2-.12A.636.636,0,0,1,.765.017L.9.05a.752.752,0,0,1,.371.214l1.1,1.167L3.723.312A.752.752,0,0,1,4.076.149L4.253.118a.6.6,0,0,1,.238.007A.266.266,0,0,1,4.665.26L4.7.326a.241.241,0,0,1-.059.3l-1.7,1.411L4.278,3.446a.247.247,0,0,1,.019.318l-.05.067a.306.306,0,0,1-.2.12.6.6,0,0,1-.1.008A.623.623,0,0,1,3.807,3.941Z" transform="translate(12.135 10.021)" fill="#212121" stroke="#212121" stroke-width="0.75" stroke-dasharray="0 0" />
                                    <g id="T">
                                        <rect id="Rectangle_191" data-name="Rectangle 191" width="10" height="0.765" rx="0.382" transform="translate(0 12.235)" fill="#212121" />
                                        <path id="I" d="M2.847.548A.75.75,0,0,1,3.569,0h.442a.75.75,0,0,1,.722.952l-2.58,9.206a.75.75,0,0,1-.722.548H.989a.75.75,0,0,1-.722-.952Z" transform="translate(4 0.765)" fill="#212121" />
                                        <rect id="Rectangle_190" data-name="Rectangle 190" width="12" height="1.529" rx="0.765" transform="translate(2)" fill="#212121" />
                                    </g>
                                </svg>

                            </div>

                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Écrivez votre message" rows="15"></textarea>
                            <button className=" btn btn-primary mt-5">Envoyer à tous les stagiaires</button>
                        </div>

                    </Card.Body>
                </Card>





            </>
        );

    }

}

