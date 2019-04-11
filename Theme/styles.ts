import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({

    // Views
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
    },
    formGroup: {
        marginBottom: 12
    },

    // Text
    h1: { fontSize: 22, marginBottom: 12, fontWeight: 'bold' },
    h2: { fontSize: 20, marginBottom: 12 },
    h3: { fontSize: 18, marginBottom: 8 },
    h4: { fontSize: 16, marginBottom: 8 },
    h5: { fontSize: 14, marginBottom: 8, },
    h6: { fontSize: 12, marginBottom: 8, fontWeight: 'bold' },

    label: { marginBottom: 4, marginLeft: 2 },

    // Text input
    textInput: {
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.lightGray
    },

    // Flat lists
    flatListRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: 24,
        height: 96,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    }

}) 