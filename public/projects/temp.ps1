$InputDir  = "D:\extra_coding\04_lineup_studio\lineup-studio\public\projects\proj6\desktop"
$OutputDir = "D:\extra_coding\04_lineup_studio\lineup-studio\public\projects\proj6\mobile-small\"

# Create output directory if it doesn't exist
if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

# Mobile sizes (widths)
$Sizes = @(220)

Get-ChildItem $InputDir -File | ForEach-Object {

    $BaseName = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)

    foreach ($Width in $Sizes) {

        $OutputFile = Join-Path $OutputDir "$BaseName-$Width.webp"

        magick $_.FullName `
            -resize "${Width}x" `
            -filter Lanczos `
            -strip `
            -quality 85 `
            $OutputFile
    }
}

# $InputDir  = "D:\extra_coding\04_lineup_studio\lineup-studio\public\profile-pictures"
# $OutputDir = "D:\extra_coding\04_lineup_studio\lineup-studio\public\profile-pictures\webp"

# # Create output directory if it doesn't exist
# if (!(Test-Path $OutputDir)) {
#     New-Item -ItemType Directory -Path $OutputDir | Out-Null
# }

# # Supported extensions
# $Extensions = @(".png", ".jpg", ".jpeg", ".svg")

# Get-ChildItem $InputDir -File | Where-Object { $Extensions -contains $_.Extension.ToLower() } | ForEach-Object {

#     $BaseName = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
#     $OutputFile = Join-Path $OutputDir "$BaseName.webp"

#     magick $_.FullName `
#         -strip `
#         -quality 85 `
#         $OutputFile
# }
