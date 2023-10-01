import {
    VStack,
    Text,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from "@chakra-ui/react"
import { useState } from "react"

export const YearFilter = () => {
    const [range, setRange] = useState([2000, 2000])
    return (
        <VStack w="full">
            <Text fontWeight="semibold">
                Selected Range: {range[0]} to {range[1]}
            </Text>
            <RangeSlider
                defaultValue={[2000, 2000]}
                min={2000}
                max={2023}
                step={1}
                onChange={setRange}
            >
                <RangeSliderTrack bg="purple.100">
                    <RangeSliderFilledTrack bg="purple.500" />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={4} index={0} />
                <RangeSliderThumb boxSize={4} index={1} />
            </RangeSlider>
        </VStack>
    )
}
