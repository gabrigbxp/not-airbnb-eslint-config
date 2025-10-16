# Inspector

[ESLint Config Inspector](https://github.com/eslint/config-inspector) is a visual tool designed to inspect and understand ESLint flat configuration files.

## Configs

![configs](./readme/configs.png)

The first section displays all rule sets. For each set, you can see:

- The number of files matching the rules.
- The number of ignored files.
- The number of configurations, plugins, and rules loaded into the config file.

Examples:

- 2 matched files:  
  ![match](./readme/match.png)

- 2 ignored files:  
  ![ignore](./readme/ignore.png)

- 2 options:  
  ![options](./readme/options.png)

- 1 plugin and 48 rules:  
  ![plugin and rules](./readme/plugin-n-rules.png)

## Icons

Each rule has an icon indicating its severity level:

- Error: ![error icon](./readme/error.png)  
- Warning: ![warning icon](./readme/warning.png)  
- Off: ![off icon](./readme/off.png)

If a circle appears above the icon, it means the rule has options configured:

- With options:  
  ![error with option](./readme/error-with-option.png) ![warning with option](./readme/warning-with-option.png)

- With a default option (blue circle):  
  ![error with default](./readme/errow-with-default-option.png)

You can also identify whether a rule is invalid or deprecated:  
![invalid or deprecated](./readme/invalid-or-deprecated.png)

## Rules

This section lists all recognized rules. You can filter them by:

- Plugin
- Usage
- State

![known rules](./readme/known-rules.png)

Additionally, it shows:

- How many times each rule is defined.
- In which files it appears.
- What options are set.  
![how many times](./readme/how-many.png)

## Files

Displays all files involved in the configuration:  
![files](./readme/files.png)
