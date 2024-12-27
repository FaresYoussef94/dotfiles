local mason_status, mason = pcall(require, "mason")

if not mason_status then
    return
end

local mason_lspconfig_status, mason_lsp_config = pcall(require, "mason_lspconfig")
if not mason_lspconfig_status then
    return
end

mason.setup()

mason_lspconfig.setup({
    ensure_installed = {
        "pylsp",
        "mypy",
        "black",
        "isort",
        "ruff",
        "rust_analyzer",
        "smithy_ls",
        "kotlin_language_server",
        "tsserver",
        "gopls",
        "jdtls"
    }
})

mason_null_ls.setup({
  -- list of formatters & linters for mason to install
  ensure_installed = {
    "prettier", -- ts/js formatter
    -- "stylua", -- lua formatter
    "eslint_d", -- ts/js linter
  },
  -- auto-install configured formatters & linters (with null-ls)
  automatic_installation = true,
})
