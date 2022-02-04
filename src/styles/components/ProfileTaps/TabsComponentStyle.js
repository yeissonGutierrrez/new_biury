import { style } from "typestyle";

const TabsComponentStyle = style({
  width: '100vw',
  margin: '50px 0',
  $nest: {
    '& .tabs-menu': {
        width: '90%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        $nest: {
            '& .tab': {
                textAlign: 'center',
                fontFamily: 'GothamBold',
                fontWeight: 900,
                padding: '20px',
                width: '100%',
                listStyle: 'none',
                fontSize: '26px',
                zIndex: 1000,
                cursor: 'pointer',
            },
        }
    },
    '& .tab-content': {
        position: 'relative',
    },
    '& .tab-content-text': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
        fontFamily: 'Satoshi',
        fontSize: '35px',
        maxWidth: '800px',
        margin: 'auto',
        fontWeight: 400,
    },
}
})

export default TabsComponentStyle