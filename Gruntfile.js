module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    gc: {
      today: grunt.template.today("yyyy-mm-dd")
    }
  });

  grunt.registerTask("append", "Append text to a file", function() {
    const file = grunt.option("file");
    const sort = grunt.option("sort") || false;
    const text = grunt.option("text");

    let contents = grunt.file.read(file);

    if (sort) {
      let lines = contents.split("\n"); //linebreak type set in eslint
      console.log(`${lines.length} lines read from ${file}`);

      if (lines.indexOf(text) === -1) {
        lines.push(text);
      }

      lines = lines.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
      });

      console.log(`Writing ${lines.length} lines to file: ${file}`);
      contents = lines.join("\n");
    } else {
      contents += `\n${text}`;
    }

    grunt.file.write(file, contents);

    console.log(`[SUCCESS] Appended "${text}" to ${file}`);
  });

  grunt.registerTask("gen-component", "Generates Component", function(
    componentName
  ) {
    //camel case

    componentName =
      componentName ||
      grunt.option("componentName") ||
      grunt.option("component");

    if (!componentName) {
      console.error(`[FAILURE] - Missing component name`);
    } else {
      componentName = componentName[0].toUppercase() + componentName.substr(1)

      const templatePath = `templates/ComponentTemplate.js`;
      const stylesTemplatePath = `templates/StylesTemplate.scss`;

      if (!grunt.file.exists(templatePath)) {
        console.error(
          `[FAILURE] - Missing component template: ${templatePath}`
        );
      }
      if (!grunt.file.exists(stylesTemplatePath)) {
        console.error(
          `[FAILURE] - Missing styles template: ${stylesTemplatePath}`
        );
      } else {
        const writePath = `src/components/${componentName}/index.js`;
        const stylesWritePath = `src/components/${componentName}/styles.scss`;

        let contents = grunt.file.read(templatePath);
        contents = contents.replace(/COMPONENT_NAME/g, componentName);

        const styleContents = grunt.file.read(stylesTemplatePath);

        grunt.file.write(writePath, contents);
        grunt.file.write(stylesWritePath, styleContents);

        grunt.option("file", `src/components/index.js`);
        grunt.option("sort", true);
        grunt.option("text", `export * from './${componentName}'`);

        grunt.task.run("append");

        if (
          grunt.file.exists(writePath) &&
          grunt.file.exists(stylesWritePath)
        ) {
          console.log(`[SUCCESS]: file ${writePath} written.`);
          console.log(`[SUCCESS]: file ${stylesWritePath} written.`);
        } else {
          console.error(
            `[FAILURE]: Unable to write one or more files: ${writePath} OR ${stylesWritePath}`
          );
        }
      }
    }
  });
}