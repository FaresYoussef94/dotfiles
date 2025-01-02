return {
  "ibhagwan/fzf-lua",
  keys = function()
    return {
      { "<leader>ff", require("fzf-lua").files, { desc = "FZF files" } },
      { "<leader>fs", require("fzf-lua").live_grep, { desc = "FZF live grep" } },
    }
  end,
}
