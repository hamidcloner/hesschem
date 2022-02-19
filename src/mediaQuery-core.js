
// define default size 
const size = {
    xs_resolution : '576px',
    sm_resolution : '576px',
    md_resolution : '768px',
    lg_resolution : '992px',
    xl_resolution : '1200px',
    xxl_resolution : '1400px',
}

const devices = {
    xsDevice : `(max-width : ${size.xs_resolution})`,
    smDevice : `(min-width : ${size.sm_resolution})`,
    mdDevice : `(min-width : ${size.md_resolution})`,
    lgDevice : `(min-width : ${size.lg_resolution})`,
    xlDevice : `(min-width : ${size.xl_resolution})`,
    xxlDevice : `(min-width : ${size.xxl_resolution})`,
}

export default devices;