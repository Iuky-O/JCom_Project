import { StyleSheet } from "react-native"
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({

    corpo: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 100,
        gap: 16
    },
    Title: {
        fontSize: 30,
        color: Colors.MALTE,
    },
    Input: {
        color: Colors.AZUL_PACIFICO,
        backgroundColor: Colors.BRANCO,
        borderRadius: 10,
        borderColor: Colors.AZUL_IRIS,
        borderWidth: 1,
        marginTop: 5,
        width: '90%',
        paddingHorizontal: 10,

    },
    button: {
        backgroundColor: Colors.MALTE,
        padding: 10,
        borderRadius: 10,
        width: 150,
    },
    buttonTxt: {
        color: Colors.BRANCO,
        textAlign: "center",
        fontSize: 12,
    }
})
export default styles;