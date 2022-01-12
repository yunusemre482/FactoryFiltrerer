const vs = `
    varying vec3 vWorldPosition;
    uniform mat4 modelViewMatrix;

    void main() {
        gl_Position = modelViewMatrix * vWoldPosition;
    }
`;
const fs = `
    precision mediump float;
    uniform vec4 color;
    
    void main() {
        gl_FragColor = color;
    }
`;

export const vs2 = `
    varying vec3 vWorldPosition;
    void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
`
export const fs2 = `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;

    varying vec3 vWorldPosition;

    void main() {

        float h = normalize( vWorldPosition + offset ).y;
        gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );

    }
`
