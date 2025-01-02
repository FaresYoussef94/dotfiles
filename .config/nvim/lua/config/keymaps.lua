-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua

-- Deleting LazyVim default keymaps
-- vim.keymap.del("n", "s")

-- Add any additional keymaps here

-- greatest remap ever
vim.keymap.set("n", "<leader>p", [["+p]], { desc = "Paste from system clipboard" })
vim.keymap.set({ "n", "v" }, "<leader>y", [["+y]], { desc = "Yank to system clipboard" })

-- Split commands
vim.keymap.set("n", "<leader>sv", "<C-w>v", { desc = "Split vertical" })
vim.keymap.set("n", "<leader>sh", "<C-w>s", { desc = "Split horizontal" })
vim.keymap.set("n", "<leader>se", "<C-w>=", { desc = "Split equal" })
vim.keymap.set("n", "<leader>sx", ":close<CR>", { desc = "Close split" })

-- Tab commands
vim.keymap.set("n", "<leader>to", ":tabnew<CR>", { desc = "Open tab" })
vim.keymap.set("n", "<leader>tx", ":tabclose<CR>", { desc = "Close tab" })
vim.keymap.set("n", "<leader>tn", ":tabn<CR>", { desc = "Next tab" })
vim.keymap.set("n", "<leader>tp", ":tabp<CR>", { desc = "Previous tab" })

vim.keymap.set("n", "<leader><leader>", function()
  vim.cmd("w")
end, { desc = "Save" })
