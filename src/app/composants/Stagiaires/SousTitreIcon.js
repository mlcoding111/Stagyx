import React from 'react'

export default function SousTitreIcon(props) {
    return (
        <>
            <h6 className='my-3'>
              <svg
                id="Library"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <rect
                  id="Library_Background_"
                  data-name="Library (Background)"
                  width="14"
                  height="14"
                  fill="none"
                />
                <rect id="bound" width="14" height="14" fill="none" />
                <path
                  id="Combined_Shape"
                  data-name="Combined Shape"
                  d="M2.917,9.625V.875a.875.875,0,1,1,1.75,0v8.75a.875.875,0,1,1-1.75,0ZM0,9.625V.875a.875.875,0,0,1,1.75,0v8.75a.875.875,0,1,1-1.75,0Z"
                  transform="translate(2.333 1.75)"
                  fill="#a8dadc"
                />
                <rect
                  id="Rectangle_Copy_2"
                  data-name="Rectangle Copy 2"
                  width="1.75"
                  height="10.5"
                  rx="0.875"
                  transform="translate(7.862 2.289) rotate(-19)"
                  fill="#a8dadc"
                  opacity="0.3"
                />
              </svg>
              {props.titre}
            </h6>
        </>
    )
}
