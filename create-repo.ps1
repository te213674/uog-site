$body = @{
    name = "uog-site"
    private = $true
    description = "Backup site UOG"
} | ConvertTo-Json

$headers = @{
    Authorization = "token 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"
}

Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
