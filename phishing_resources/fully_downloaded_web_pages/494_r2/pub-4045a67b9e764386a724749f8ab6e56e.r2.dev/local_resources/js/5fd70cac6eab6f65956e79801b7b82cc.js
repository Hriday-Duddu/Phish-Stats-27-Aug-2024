<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="https://www.cloudflare.com/favicon.ico" />
    <title>Not Found</title>
    <style>
      body {
        font-family: system-ui;
        font-weight: 300;
        font-size: 1.25rem;
        color: #36393a;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      main {
        max-width: 1200px;
        margin-top: 120px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      #text {
        max-width: 60%;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      main > section > div {
        margin-bottom: 3.25rem;
      }
      svg {
        margin-left: 2rem;
      }
      @keyframes eye-1 {
        0% {
          transform: translateX(0);
        }
        10%,
        50% {
          transform: translateX(-5px);
        }
        60% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes eye-2 {
        0% {
          transform: translateX(0);
        }
        10%,
        50% {
          transform: translateX(5px);
        }
        60% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(0px);
        }
      }
      svg > .eye-1 {
        animation: eye-1 3s infinite;
      }
      svg > .eye-2 {
        animation: eye-2 3s 0.6s infinite;
      }
      h1 {
        font-size: 3.75rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: 400;
        color: #92979b;
        margin: 0;
      }
      a {
        color: #0055dc;
      }
      p {
        margin: 0;
      }
      #error-title {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      #footer-title {
        font-weight: 700;
        margin-bottom: 0.75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <section id="text">
        <div>
          <h1>Error 404</h1>
          <h3>Object not found</h3>
        </div>

        <div>
          <p>
            This object does not exist or is not publicly accessible at this
            URL. Check the URL of the object that you're looking for or contact
            the owner to enable Public access.
          </p>
        </div>

        <div>
          <p id="footer-title">Is this your bucket?</p>
          <p>
            Learn how to enable
            <a
              href="https://developers.cloudflare.com/r2/data-access/public-buckets/"
              >Public Access</a
            >
          </p>
        </div>
      </section>

      <section>
        <svg
          width="414"
          height="212"
          viewBox="0 0 414 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="208.5" cy="166.5" rx="174.5" ry="45.5" fill="#E2F5FA" />
          <path
            d="M205.516 80.2674H139.419L148.186 141.237H197.788L205.516 80.2674Z"
            fill="#C5EBF5"
          />
          <path
            d="M205.516 80.2674H139.419L148.186 141.237H197.788L205.516 80.2674Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M205.516 80.2674H139.419L148.186 141.237H197.788L205.516 80.2674Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="137"
            y="75"
            width="70.9351"
            height="9.39611"
            rx="2.40792"
            fill="#C5EBF5"
            stroke="#6ECCE5"
            stroke-width="2"
          />
          <path
            d="M124.566 13.277C121.053 13.277 118.204 10.4288 118.204 6.91534C118.204 3.40191 121.053 0.553711 124.566 0.553711C128.08 0.553711 130.928 3.40191 130.928 6.91534C130.928 10.4288 128.08 13.277 124.566 13.277Z"
            fill="#0055DC"
          />
          <path
            d="M122.692 10.2347H126.402V24.0345H122.692V10.2347Z"
            fill="#0055DC"
          />
          <path
            d="M85.6775 57.6815H163.733V127.819H85.6775V57.6815Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M183.719 96.4263H179.429C179.429 96.4263 178.132 78.2631 163.565 71.5752V65.4338C169.87 67.9703 182.283 75.5798 183.719 96.4263Z"
            fill="#0055DC"
          />
          <path
            d="M193.146 105.43L188.253 106.931C188.253 106.931 186.752 98.3591 181.394 99.6477C176.035 100.936 177.96 108.22 177.96 108.22H173.678C173.678 108.22 170.889 95.9857 180.537 94.0691C190.186 92.1524 193.146 105.43 193.146 105.43Z"
            fill="#0055DC"
          />
          <path
            d="M65.5132 96.4345H69.795C69.795 96.4345 71.0999 78.2712 85.6583 71.5752V65.4338C79.3537 67.9377 66.916 75.5472 65.5132 96.4345Z"
            fill="#0055DC"
          />
          <path
            d="M56.0777 105.406L60.9712 106.906C60.9712 106.906 62.472 98.3345 67.8304 99.6149C73.1888 100.895 71.2559 108.195 71.2559 108.195H75.5459C75.5459 108.195 78.3353 95.9611 68.6868 94.0445C59.0384 92.1278 56.0777 105.406 56.0777 105.406Z"
            fill="#0055DC"
          />
          <path
            d="M136.176 111.953C136.176 113.281 136.704 114.555 137.643 115.494C138.582 116.433 139.856 116.961 141.184 116.961C141.842 116.962 142.494 116.833 143.103 116.582C143.711 116.331 144.264 115.962 144.73 115.497C145.196 115.032 145.565 114.48 145.818 113.872C146.07 113.264 146.2 112.612 146.2 111.953C146.2 111.295 146.07 110.642 145.818 110.034C145.566 109.425 145.196 108.872 144.73 108.407C144.265 107.941 143.712 107.571 143.103 107.319C142.495 107.067 141.842 106.937 141.184 106.937C139.855 106.94 138.581 107.469 137.642 108.409C136.703 109.35 136.176 110.624 136.176 111.953V111.953Z"
            fill="#0055DC"
          />
          <path
            d="M119.701 111.953C119.701 112.612 119.831 113.264 120.083 113.872C120.335 114.48 120.705 115.032 121.171 115.497C121.637 115.962 122.19 116.331 122.798 116.582C123.407 116.833 124.059 116.962 124.717 116.961C126.045 116.961 127.319 116.433 128.258 115.494C129.197 114.555 129.725 113.281 129.725 111.953C129.725 110.624 129.198 109.35 128.259 108.409C127.32 107.469 126.046 106.94 124.717 106.937C124.058 106.937 123.406 107.067 122.798 107.319C122.189 107.571 121.636 107.941 121.17 108.407C120.704 108.872 120.335 109.425 120.083 110.034C119.831 110.642 119.701 111.295 119.701 111.953V111.953Z"
            fill="#0055DC"
          />
          <path
            d="M103.384 111.953C103.384 112.612 103.513 113.264 103.766 113.872C104.018 114.48 104.387 115.032 104.853 115.497C105.319 115.962 105.872 116.331 106.481 116.582C107.089 116.833 107.741 116.962 108.399 116.961C109.728 116.961 111.001 116.433 111.94 115.494C112.88 114.555 113.407 113.281 113.407 111.953C113.407 110.624 112.88 109.35 111.941 108.409C111.002 107.469 109.728 106.94 108.399 106.937C107.069 106.937 105.793 107.466 104.853 108.407C103.912 109.347 103.384 110.623 103.384 111.953V111.953Z"
            fill="#0055DC"
          />
          <path
            d="M163.419 57.6273H85.5901C85.5901 57.6273 86.8707 20.01 124.5 20.01C162.13 20.01 163.419 57.6273 163.419 57.6273Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M153.931 60.0436H159.587V126.787H153.931V60.0436Z"
            fill="white"
          />
          <path
            d="M159.528 55.6816H153.703L149.151 32.3329C149.151 32.3329 158.005 44.3703 159.528 55.6816Z"
            fill="white"
          />
          <path
            d="M139.792 48.9516C134.995 48.9516 131.106 45.0627 131.106 40.2656C131.106 35.4684 134.995 31.5795 139.792 31.5795C144.589 31.5795 148.478 35.4684 148.478 40.2656C148.478 45.0627 144.589 48.9516 139.792 48.9516Z"
            fill="white"
            stroke="#0055DC"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M108.821 48.9516C104.024 48.9516 100.135 45.0627 100.135 40.2655C100.135 35.4684 104.024 31.5795 108.821 31.5795C113.618 31.5795 117.507 35.4684 117.507 40.2655C117.507 45.0627 113.618 48.9516 108.821 48.9516Z"
            fill="white"
            stroke="#0055DC"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            class="eye-1"
            d="M138.373 40.3055C138.373 41.4216 138.817 42.4921 139.606 43.2813C140.395 44.0706 141.466 44.5139 142.582 44.5139C143.697 44.5118 144.765 44.0674 145.552 43.2784C146.34 42.4894 146.782 41.4202 146.782 40.3055C146.78 39.1921 146.337 38.125 145.549 37.3378C144.762 36.5506 143.695 36.1073 142.582 36.1052C141.467 36.1052 140.398 36.5474 139.609 37.3349C138.82 38.1224 138.375 39.1907 138.373 40.3055V40.3055Z"
            fill="#6ECCE5"
          />
          <path
            class="eye-1"
            d="M107.271 40.3055C107.271 41.4202 107.714 42.4894 108.501 43.2784C109.289 44.0674 110.357 44.5118 111.472 44.5139C112.588 44.5139 113.658 44.0706 114.447 43.2813C115.237 42.4921 115.68 41.4216 115.68 40.3055C115.678 39.1907 115.234 38.1224 114.445 37.3349C113.656 36.5474 112.586 36.1052 111.472 36.1052C110.358 36.1073 109.291 36.5506 108.504 37.3378C107.717 38.125 107.274 39.1921 107.271 40.3055V40.3055Z"
            fill="#6ECCE5"
          />
          <path
            d="M84.8918 127.581H164.967C173.345 127.581 180.137 134.371 180.137 142.747C180.137 151.123 173.345 157.913 164.967 157.913H84.8918C76.5136 157.913 69.7218 151.123 69.7218 142.747C69.7218 134.371 76.5136 127.581 84.8918 127.581Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <g style="mix-blend-mode: multiply">
            <path
              d="M152.026 142.831C151.99 145.395 152.973 147.869 154.76 149.709C156.547 151.549 158.992 152.603 161.556 152.641C164.12 152.603 166.565 151.549 168.352 149.709C170.139 147.869 171.122 145.395 171.086 142.831C171.122 140.266 170.139 137.792 168.352 135.953C166.565 134.113 164.12 133.058 161.556 133.02C158.992 133.058 156.547 134.113 154.76 135.953C152.973 137.792 151.99 140.266 152.026 142.831Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M137.081 152.641C131.818 152.641 127.552 148.249 127.552 142.831C127.552 137.412 131.818 133.02 137.081 133.02C142.344 133.02 146.611 137.412 146.611 142.831C146.611 148.249 142.344 152.641 137.081 152.641Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M103.074 142.831C103.038 145.395 104.021 147.869 105.808 149.709C107.595 151.549 110.039 152.603 112.604 152.641C115.168 152.603 117.613 151.549 119.4 149.709C121.187 147.869 122.17 145.395 122.134 142.831C122.17 140.266 121.187 137.792 119.4 135.953C117.613 134.113 115.168 133.058 112.604 133.02C110.039 133.058 107.595 134.113 105.808 135.953C104.021 137.792 103.038 140.266 103.074 142.831Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M78.598 142.831C78.5614 145.395 79.5447 147.869 81.3317 149.709C83.1186 151.549 85.5631 152.603 88.1276 152.641C90.692 152.603 93.1364 151.549 94.9234 149.709C96.7103 147.869 97.6936 145.395 97.6571 142.831C97.6936 140.266 96.7103 137.792 94.9234 135.953C93.1364 134.113 90.692 133.058 88.1276 133.02C85.5631 133.058 83.1186 134.113 81.3317 135.953C79.5447 137.792 78.5614 140.266 78.598 142.831Z"
              fill="#C5EBF5"
            />
          </g>
          <path
            d="M103.252 71.1929H146.765V95.2437H103.252V71.1929Z"
            fill="#6ECCE5"
          />
          <path
            d="M137.087 75.635H142.177V79.7379H137.087V75.635Z"
            fill="#0055DC"
          />
          <path
            d="M129.852 75.635H134.934V79.7379H129.852V75.635Z"
            fill="#0055DC"
          />
          <path
            d="M137.087 87.0141H142.177V91.1089H137.087V87.0141Z"
            fill="#0055DC"
          />
          <path
            d="M129.852 87.0141H134.934V91.1089H129.852V87.0141Z"
            fill="#0055DC"
          />
          <path
            d="M137.087 81.1718H142.177V85.2666H137.087V81.1718Z"
            fill="#0055DC"
          />
          <path
            d="M129.852 81.1718H134.934V85.2666H129.852V81.1718Z"
            fill="#0055DC"
          />
          <path
            d="M108.366 75.635H127.238V91.1078H108.366V75.635Z"
            fill="white"
          />
          <path
            d="M119.345 49.2718C120.041 48.5443 120.865 47.9697 121.768 47.5786C122.671 47.1875 123.637 46.9869 124.612 46.9869C125.587 46.9869 126.553 47.1875 127.456 47.5786C128.359 47.9697 129.183 48.5443 129.879 49.2718"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M274.751 12.7232C271.238 12.7232 268.39 9.87505 268.39 6.36162C268.39 2.8482 271.238 0 274.751 0C278.265 0 281.113 2.8482 281.113 6.36162C281.113 9.87505 278.265 12.7232 274.751 12.7232Z"
            fill="#0055DC"
          />
          <path
            d="M272.877 9.68185H276.588V23.4817H272.877V9.68185Z"
            fill="#0055DC"
          />
          <path
            d="M235.863 57.1286H313.919V127.266H235.863V57.1286Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M333.248 57.7026H328.958C328.958 57.7026 327.662 75.8658 313.095 82.5537V88.6951C319.4 86.1586 331.813 78.5491 333.248 57.7026Z"
            fill="#0055DC"
          />
          <path
            d="M342.676 48.6986L337.782 47.1979C337.782 47.1979 336.282 55.7698 330.923 54.4812C325.565 53.1925 327.49 45.9093 327.49 45.9093H323.208C323.208 45.9093 320.419 58.1432 330.067 60.0598C339.715 61.9765 342.676 48.6986 342.676 48.6986Z"
            fill="#0055DC"
          />
          <path
            d="M215.043 57.6946H219.325C219.325 57.6946 220.63 75.8578 235.188 82.5538V88.6953C228.884 86.1914 216.446 78.5819 215.043 57.6946Z"
            fill="#0055DC"
          />
          <path
            d="M205.608 48.7232L210.501 47.2226C210.501 47.2226 212.002 55.7944 217.36 54.514C222.719 53.2335 220.786 45.9339 220.786 45.9339H225.076C225.076 45.9339 227.865 58.1678 218.217 60.0844C208.568 62.0011 205.608 48.7232 205.608 48.7232Z"
            fill="#0055DC"
          />
          <path
            d="M286.361 111.401C286.361 112.729 286.889 114.003 287.828 114.942C288.767 115.881 290.041 116.409 291.369 116.409C292.028 116.41 292.68 116.281 293.288 116.03C293.897 115.779 294.45 115.41 294.915 114.945C295.381 114.48 295.751 113.927 296.003 113.319C296.255 112.711 296.385 112.059 296.385 111.401C296.385 110.742 296.255 110.09 296.003 109.482C295.751 108.873 295.382 108.32 294.916 107.854C294.45 107.389 293.897 107.019 293.289 106.767C292.68 106.515 292.028 106.385 291.369 106.385C290.04 106.387 288.767 106.917 287.828 107.857C286.889 108.798 286.361 110.072 286.361 111.401V111.401Z"
            fill="#0055DC"
          />
          <path
            d="M269.887 111.401C269.887 112.059 270.017 112.711 270.269 113.319C270.521 113.927 270.891 114.48 271.357 114.945C271.823 115.41 272.376 115.779 272.984 116.03C273.593 116.281 274.245 116.41 274.903 116.409C276.231 116.409 277.505 115.881 278.444 114.942C279.383 114.003 279.911 112.729 279.911 111.401C279.911 110.072 279.383 108.798 278.445 107.857C277.506 106.917 276.232 106.387 274.903 106.385C274.244 106.385 273.592 106.515 272.984 106.767C272.375 107.019 271.822 107.389 271.356 107.854C270.89 108.32 270.521 108.873 270.269 109.482C270.017 110.09 269.887 110.742 269.887 111.401V111.401Z"
            fill="#0055DC"
          />
          <path
            d="M253.569 111.401C253.569 112.059 253.699 112.711 253.951 113.319C254.204 113.927 254.573 114.48 255.039 114.945C255.505 115.41 256.058 115.779 256.666 116.03C257.275 116.281 257.927 116.41 258.585 116.409C259.914 116.409 261.187 115.881 262.126 114.942C263.066 114.003 263.593 112.729 263.593 111.401C263.593 110.072 263.066 108.798 262.127 107.857C261.188 106.917 259.914 106.387 258.585 106.385C257.255 106.385 255.979 106.914 255.039 107.854C254.098 108.795 253.569 110.071 253.569 111.401V111.401Z"
            fill="#0055DC"
          />
          <path
            d="M313.604 57.0745H235.775C235.775 57.0745 237.056 19.4572 274.686 19.4572C312.315 19.4572 313.604 57.0745 313.604 57.0745Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M304.116 59.4908H309.773V126.234H304.116V59.4908Z"
            fill="white"
          />
          <path
            d="M309.713 55.1288H303.889L299.336 31.7801C299.336 31.7801 308.19 43.8175 309.713 55.1288Z"
            fill="white"
          />
          <path
            d="M259.006 48.4013C263.804 48.4013 267.692 44.5124 267.692 39.7152C267.692 34.918 263.804 31.0292 259.006 31.0292C254.209 31.0292 250.32 34.918 250.32 39.7152C250.32 44.5124 254.209 48.4013 259.006 48.4013Z"
            fill="white"
            stroke="#0055DC"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M289.977 48.4013C294.774 48.4013 298.663 44.5124 298.663 39.7152C298.663 34.918 294.774 31.0292 289.977 31.0292C285.18 31.0292 281.291 34.918 281.291 39.7152C281.291 44.5124 285.18 48.4013 289.977 48.4013Z"
            fill="white"
            stroke="#0055DC"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            class="eye-2"
            d="M260.425 39.7552C260.425 40.8713 259.981 41.9418 259.192 42.731C258.403 43.5202 257.333 43.9636 256.216 43.9636C255.102 43.9615 254.033 43.5171 253.246 42.7281C252.458 41.9391 252.016 40.8699 252.016 39.7552C252.018 38.6418 252.461 37.5747 253.249 36.7875C254.036 36.0002 255.103 35.557 256.216 35.5549C257.331 35.5549 258.4 35.9971 259.189 36.7846C259.978 37.5721 260.423 38.6404 260.425 39.7552V39.7552Z"
            fill="#6ECCE5"
          />
          <path
            class="eye-2"
            d="M291.527 39.7552C291.527 40.8699 291.085 41.9391 290.297 42.7281C289.51 43.5171 288.441 43.9615 287.327 43.9636C286.21 43.9636 285.14 43.5202 284.351 42.731C283.562 41.9418 283.118 40.8713 283.118 39.7552C283.12 38.6404 283.565 37.5721 284.354 36.7846C285.143 35.9971 286.212 35.5549 287.327 35.5549C288.44 35.557 289.507 36.0002 290.294 36.7875C291.082 37.5747 291.525 38.6418 291.527 39.7552V39.7552Z"
            fill="#6ECCE5"
          />
          <path
            d="M235.077 127.028H315.152C323.53 127.028 330.322 133.818 330.322 142.194C330.322 150.57 323.53 157.36 315.152 157.36H235.077C226.699 157.36 219.907 150.57 219.907 142.194C219.907 133.818 226.699 127.028 235.077 127.028Z"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <g style="mix-blend-mode: multiply">
            <path
              d="M302.212 142.278C302.175 144.843 303.159 147.317 304.946 149.157C306.733 150.996 309.177 152.051 311.741 152.089C314.306 152.051 316.75 150.996 318.537 149.157C320.324 147.317 321.308 144.843 321.271 142.278C321.308 139.714 320.324 137.24 318.537 135.4C316.75 133.561 314.306 132.506 311.741 132.468C309.177 132.506 306.733 133.561 304.946 135.4C303.159 137.24 302.175 139.714 302.212 142.278Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M287.267 152.089C282.004 152.089 277.737 147.697 277.737 142.278C277.737 136.86 282.004 132.468 287.267 132.468C292.53 132.468 296.796 136.86 296.796 142.278C296.796 147.697 292.53 152.089 287.267 152.089Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M253.26 142.278C253.223 144.843 254.207 147.317 255.994 149.157C257.781 150.996 260.225 152.051 262.789 152.089C265.354 152.051 267.798 150.996 269.585 149.157C271.372 147.317 272.356 144.843 272.319 142.278C272.356 139.714 271.372 137.24 269.585 135.4C267.798 133.561 265.354 132.506 262.789 132.468C260.225 132.506 257.781 133.561 255.994 135.4C254.207 137.24 253.223 139.714 253.26 142.278Z"
              fill="#C5EBF5"
            />
          </g>
          <g style="mix-blend-mode: multiply">
            <path
              d="M228.783 142.278C228.747 144.843 229.73 147.317 231.517 149.157C233.304 150.996 235.749 152.051 238.313 152.089C240.877 152.051 243.322 150.996 245.109 149.157C246.896 147.317 247.879 144.843 247.843 142.278C247.879 139.714 246.896 137.24 245.109 135.4C243.322 133.561 240.877 132.506 238.313 132.468C235.749 132.506 233.304 133.561 231.517 135.4C229.73 137.24 228.747 139.714 228.783 142.278Z"
              fill="#C5EBF5"
            />
          </g>
          <path
            d="M253.437 70.6394H296.951V94.6902H253.437V70.6394Z"
            fill="#6ECCE5"
          />
          <path
            d="M287.272 75.0814H292.363V79.1842H287.272V75.0814Z"
            fill="#0055DC"
          />
          <path
            d="M280.037 75.0814H285.119V79.1842H280.037V75.0814Z"
            fill="#0055DC"
          />
          <path
            d="M287.272 86.4604H292.363V90.5552H287.272V86.4604Z"
            fill="#0055DC"
          />
          <path
            d="M280.037 86.4604H285.119V90.5552H280.037V86.4604Z"
            fill="#0055DC"
          />
          <path
            d="M287.272 80.6182H292.363V84.713H287.272V80.6182Z"
            fill="#0055DC"
          />
          <path
            d="M280.037 80.6182H285.119V84.713H280.037V80.6182Z"
            fill="#0055DC"
          />
          <path
            d="M258.552 75.0814H277.424V90.5542H258.552V75.0814Z"
            fill="white"
          />
          <path
            d="M269.53 48.7169C270.226 47.9894 271.05 47.4149 271.953 47.0237C272.856 46.6326 273.822 46.432 274.797 46.432C275.772 46.432 276.738 46.6326 277.641 47.0237C278.545 47.4149 279.368 47.9894 280.064 48.7169"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M409.67 76.5789H343.573L352.34 137.548H401.942L409.67 76.5789Z"
            fill="#C5EBF5"
          />
          <path
            d="M409.67 76.5789H343.573L352.34 137.548H401.942L409.67 76.5789Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M409.67 76.5789H343.573L352.34 137.548H401.942L409.67 76.5789Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="341.154"
            y="71.3115"
            width="70.9351"
            height="9.39611"
            rx="2.40792"
            fill="#C5EBF5"
            stroke="#6ECCE5"
            stroke-width="2"
          />
          <path
            d="M409.671 93.3885H343.573L352.34 154.358H401.942L409.671 93.3885Z"
            fill="#C5EBF5"
          />
          <path
            d="M409.671 93.3885H343.573L352.34 154.358H401.942L409.671 93.3885Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M409.671 93.3885H343.573L352.34 154.358H401.942L409.671 93.3885Z"
            stroke="#6ECCE5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="341.154"
            y="88.1211"
            width="70.9351"
            height="9.39611"
            rx="2.40792"
            fill="#C5EBF5"
            stroke="#6ECCE5"
            stroke-width="2"
          />
          <path
            d="M295.581 108.36H360.026L351.478 167.805H303.116L295.581 108.36Z"
            fill="#C5EBF5"
          />
          <path
            d="M295.581 108.36H360.026L351.478 167.805H303.116L295.581 108.36Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M295.581 108.36H360.026L351.478 167.805H303.116L295.581 108.36Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="-1"
            y="1"
            width="69.1117"
            height="9.1112"
            rx="2.40792"
            transform="matrix(-1 0 0 1 361.359 102.25)"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M342.555 136.334H382.924L377.569 173.57H347.275L342.555 136.334Z"
            fill="#C5EBF5"
          />
          <path
            d="M342.555 136.334H382.924L377.569 173.57H347.275L342.555 136.334Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M342.555 136.334H382.924L377.569 173.57H347.275L342.555 136.334Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="-1"
            y="1"
            width="42.5446"
            height="4.96009"
            rx="2.40792"
            transform="matrix(-1 0 0 1 383.012 132.506)"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
          <path
            d="M17.328 102.337L6.64737 166.613L67.3531 167.939L75.3682 119.704L17.328 102.337Z"
            fill="#C5EBF5"
          />
          <path
            d="M17.328 102.337L6.64737 166.613L67.3531 167.939L75.3682 119.704L17.328 102.337Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.328 102.337L6.64737 166.613L67.3531 167.939L75.3682 119.704L17.328 102.337Z"
            stroke="#0055DC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="1.15039"
            y="168.103"
            width="69.8978"
            height="9.23404"
            rx="2.40792"
            transform="rotate(-80.5655 1.15039 168.103)"
            fill="#C5EBF5"
            stroke="#0055DC"
            stroke-width="2"
          />
        </svg>
      </section>
    </main>
  </body>
</html>