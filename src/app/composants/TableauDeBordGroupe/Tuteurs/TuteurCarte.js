import React from "react";
import { Card, Col } from "react-bootstrap";

import BoutonContact from './BoutonContact'

export default function TuteurCarte() {
  return (
    <Col md="6" lg="6" xl="3">
      <Card className="tuteurCarte">
        <Card.Body className="d-flex flex-row">

          <Col md="8">
            <Card.Title>
              <b>Expert</b>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Posez votre question
            </Card.Subtitle>
            <Card.Text>
              <BoutonContact />
            </Card.Text>
          </Col>

            {/* Cette column est le code SVG de l'avatar */}
          <Col md="3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
              height="91"
              viewBox="0 0 91 91"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="boy-16_Background_Mask_"
                    data-name="boy-16 (Background/Mask)"
                    width="91"
                    height="91"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g id="boy-16" transform="translate(-0.079 -0.149)">
                <rect
                  id="boy-16_Background_Mask_2"
                  data-name="boy-16 (Background/Mask)"
                  width="91"
                  height="91"
                  fill="none"
                />
                <g id="boy-16-2" data-name="boy-16" clip-path="url(#clip-path)">
                  <g id="Group" transform="translate(13.976)">
                    <path
                      id="Vector"
                      d="M60.764,69.718a6.411,6.411,0,0,0-4.334-5.287l-7.822-2.608a3.206,3.206,0,0,0-3.081.576l-2.3-.768a3.205,3.205,0,0,1-2.192-3.041V53.422l6.9-2.877a9.616,9.616,0,0,0,5.918-8.876v-1.6a4.807,4.807,0,0,0,3.426-8.18l1.69-13.521A16.338,16.338,0,0,0,42.756,0S19.82,0,19.721.012a9.611,9.611,0,0,0-7.85,4.8h-.45a8.068,8.068,0,0,0-8.162,8.73c0,.034.008.068.012.1L5.552,31.887a4.807,4.807,0,0,0,3.426,8.18v1.6A9.616,9.616,0,0,0,14.9,50.545l6.9,2.877v5.169a3.205,3.205,0,0,1-2.192,3.041l-2.3.768a3.206,3.206,0,0,0-3.081-.576L6.4,64.431a6.411,6.411,0,0,0-4.334,5.287L.038,85.947a4.808,4.808,0,0,0,4.771,5.4H58.022a4.808,4.808,0,0,0,4.771-5.4Z"
                      transform="translate(0 0.003)"
                      fill="#ffd7a3"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M1.553,5.3c0,.077,0,.154-.009.23,0,.04-.008.08-.012.12s-.007.063-.011.095c-.009.062-.02.122-.032.183v0A3.2,3.2,0,0,1,0,8.047C13.407,10.363,20.785,0,20.785,0H1.553V5.3Z"
                      transform="translate(20.247 53.291)"
                      fill="#fdc88e"
                    />
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M.122,0H0V33.656H14.424l1.911-15.29A16.339,16.339,0,0,0,.122,0Z"
                      transform="translate(42.634 0.002)"
                      fill="#734a3e"
                    />
                    <g
                      id="Group-2"
                      data-name="Group"
                      transform="translate(3.21 4.81)"
                    >
                      <path
                        id="Vector-4"
                        data-name="Vector"
                        d="M.06,8.831l2.5,20.017h9.616V0H8.21A8.068,8.068,0,0,0,.048,8.73C.052,8.764.056,8.8.06,8.831Z"
                        transform="translate(0 0)"
                        fill="#623f33"
                      />
                    </g>
                    <path
                      id="Vector-5"
                      data-name="Vector"
                      d="M49.682,8.013A8.013,8.013,0,0,0,41.669,0H12.821A8.013,8.013,0,0,0,4.808,8.013v3.205a4.808,4.808,0,0,0,0,9.616v1.6a9.616,9.616,0,0,0,5.917,8.876l10.355,4.315a16.026,16.026,0,0,0,12.328,0l10.356-4.315a9.616,9.616,0,0,0,5.918-8.876v-1.6a4.808,4.808,0,1,0,0-9.616Z"
                      transform="translate(4.17 19.234)"
                      fill="#ffe1b2"
                    />
                    <g
                      id="Group-3"
                      data-name="Group"
                      transform="translate(18.594 32.056)"
                    >
                      <path
                        id="Vector-6"
                        data-name="Vector"
                        d="M0,3.205V1.6a1.6,1.6,0,0,1,3.205,0v1.6A1.6,1.6,0,0,1,0,3.205Z"
                        fill="#623f33"
                      />
                    </g>
                    <g
                      id="Group-4"
                      data-name="Group"
                      transform="translate(41.031 32.056)"
                    >
                      <path
                        id="Vector-7"
                        data-name="Vector"
                        d="M0,3.205V1.6a1.6,1.6,0,0,1,3.205,0v1.6A1.6,1.6,0,0,1,0,3.205Z"
                        fill="#623f33"
                      />
                    </g>
                    <g
                      id="Group-5"
                      data-name="Group"
                      transform="translate(23.402 43.274)"
                    >
                      <g id="Group-6" data-name="Group">
                        <path
                          id="Vector-8"
                          data-name="Vector"
                          d="M.7,2.928A1.6,1.6,0,1,1,2.5.278,10.29,10.29,0,0,0,8.014,1.647,10.29,10.29,0,0,0,13.523.278a1.6,1.6,0,0,1,1.8,2.65A13.349,13.349,0,0,1,8.014,4.852,13.349,13.349,0,0,1,.7,2.928Z"
                          transform="translate(0 0)"
                          fill="#e4b07b"
                        />
                      </g>
                    </g>
                    <path
                      id="Vector-9"
                      data-name="Vector"
                      d="M12.821,0a7.9,7.9,0,0,0-1.6.164v0A8.015,8.015,0,0,0,4.808,8.013v3.205a4.808,4.808,0,1,0,0,9.616v1.6a9.616,9.616,0,0,0,5.917,8.876l10.355,4.315a16.049,16.049,0,0,0,1.548.551,66.889,66.889,0,0,1-9.408-8.188,7.513,7.513,0,0,1-2-5.134V4.692c8.9,7.1,28.088,6.526,38.464,6.526v-3.2A8.013,8.013,0,0,0,41.669,0Z"
                      transform="translate(4.17 19.234)"
                      fill="#ffd7a3"
                    />
                    <path
                      id="Vector-10"
                      data-name="Vector"
                      d="M9.616,0A9.616,9.616,0,0,0,0,9.619c0,9.265,8.814,14.875,16.027,17.629,0,0-.8-1.468-1.888-3.638,6.4,2.14,16.277,3.638,29.734,3.638V22.64C43.873-.732,32.053,0,32.053,0Z"
                      transform="translate(10.581)"
                      fill="#734a3e"
                    />
                    <path
                      id="Vector-11"
                      data-name="Vector"
                      d="M28.243,7.986a.791.791,0,0,1-1-.774,4.007,4.007,0,1,0-8.013,0,.792.792,0,0,1-1,.774A6.41,6.41,0,1,1,7.026,2.4H.8a.8.8,0,0,1,0-1.6H8.933a6.407,6.407,0,0,1,9.274,3.941,5.606,5.606,0,0,1,10.062,0A6.406,6.406,0,0,1,37.547.8l.016,0h8.176a.8.8,0,1,1,0,1.6H39.451A6.409,6.409,0,1,1,28.243,7.986Z"
                      transform="translate(8.177 28.049)"
                      fill="#734a3e"
                    />
                    <path
                      id="Vector-12"
                      data-name="Vector"
                      d="M30.257,1.565,26.936.458A3.19,3.19,0,0,1,26.055,0,12.8,12.8,0,0,1,15.128,6.138,12.8,12.8,0,0,1,4.2,0a3.206,3.206,0,0,1-.881.458L0,1.565a17.223,17.223,0,0,0,15.128,8.98A17.224,17.224,0,0,0,30.257,1.565Z"
                      transform="translate(16.287 61.176)"
                      fill="#b97e63"
                    />
                    <g
                      id="Group-7"
                      data-name="Group"
                      transform="translate(0 61.658)"
                    >
                      <path
                        id="Vector-13"
                        data-name="Vector"
                        d="M60.764,8.062A6.411,6.411,0,0,0,56.43,2.775L48.608.168a3.153,3.153,0,0,0-3.664,1.243,16,16,0,0,1-13.528,7.45,16,16,0,0,1-13.528-7.45A3.153,3.153,0,0,0,14.223.168L6.4,2.775A6.41,6.41,0,0,0,2.066,8.062L.038,24.291a4.808,4.808,0,0,0,4.771,5.4H58.022a4.808,4.808,0,0,0,4.771-5.4Z"
                        fill="#ffa64e"
                      />
                    </g>
                    <g
                      id="Group-8"
                      data-name="Group"
                      transform="translate(0 66.546)"
                    >
                      <path
                        id="Vector-14"
                        data-name="Vector"
                        d="M2.066,3.174.038,19.4a4.808,4.808,0,0,0,4.771,5.4h8.977V14.377a6.411,6.411,0,0,0-1.565-4.2L3.4,0A6.4,6.4,0,0,0,2.066,3.174Z"
                        transform="translate(0)"
                        fill="#ff8c51"
                      />
                    </g>
                    <g
                      id="Group-9"
                      data-name="Group"
                      transform="translate(49.044 66.546)"
                    >
                      <path
                        id="Vector-15"
                        data-name="Vector"
                        d="M11.72,3.174,13.748,19.4a4.808,4.808,0,0,1-4.771,5.4H0V14.377a6.411,6.411,0,0,1,1.565-4.2L10.384,0A6.4,6.4,0,0,1,11.72,3.174Z"
                        fill="#ff8c51"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
}
