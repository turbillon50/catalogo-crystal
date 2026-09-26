module.exports = {
  apps: [{
    name: "catalogo-crystal",
    cwd: "/root/live-crystal",
    script: "node_modules/.bin/next",
    args: "start -p 3401",
    env: { NODE_ENV: "production", PORT: "3401" }
  }]
};
