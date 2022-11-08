<template>
    <code-highlight language="javascript">
        {{ content }}
    </code-highlight>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
export default {
    name: "CodeSnippet",
    props: ['content'],
    components: {
        CodeHighlight
    }
};
</script>