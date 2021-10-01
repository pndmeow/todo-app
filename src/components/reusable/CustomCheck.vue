<template>
    <div>
        <div class="check-btn-circle"
             @click="task.completed = !task.completed"
        >
            <check-icon />
        </div>
    </div>
</template>

<script>
import CheckIcon from "../icons/CheckIcon";

export default {
    name: "CustomCheck",
    components: {CheckIcon},
    props: {
        task: null
    }
}
</script>

<style scoped lang="scss">

</style>