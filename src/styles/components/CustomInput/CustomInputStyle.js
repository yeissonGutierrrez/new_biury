import { style } from "typestyle";

const CustomInputStyle = style({
    display: 'flex',
    width: '40%',
    justifyContent: 'space-between',
    $nest:{
        '& label': {
            fontFamily: 'CocoGothSemiBold',
            fontWeight: 700,
            fontSize: '24px',
            marginRight: '20px',
            paddingTop: '0px'
        },
        '& .input_style': {
            textAlign: 'center',
            $nest: {
                '& input': {
                    width: '410px',
                    fontSize: '35px',
                    color: 'white',
                    backgroundColor: 'rgb(255,0,0,0)',
                    border: 'none',
                    borderBottom: 'solid 1px white',
                    lineHeight: 1.5,
                    outline: 'none',
                    marginBottom: '10px'
                },
                '& span': {
                    fontFamily: 'CocoGothLight',
                    display: 'block',
                    fontSize: '20px',
                },
            }
        }
    }
})

export default CustomInputStyle