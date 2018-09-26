import React from "react";
import {Text, TextInput, View} from "@shoutem/ui";

export default function InputForm(props) {
    const { input, meta, ...inputProps } = props;
    return (
        <View>
            <TextInput
                {...inputProps}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
            />
        </View>
    );
}
