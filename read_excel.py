# -*- coding: utf-8 -*-
import xlrd
import os

files = [
    'reference/таблица расчета стоимости УОГ.xls',
    'reference/расчет затрат на очистку УОГ-200-4(СД).xls',
    'reference/смп-нефтегаз/Рассчёт себестоимости 1 нм3 газа смп нефтегаз.xls',
    'reference/смп-нефтегаз/Рассчёт себестоимости 1 нм3 газа смп нефтегаз (2).xls'
]

output = []
for f in files:
    if os.path.exists(f):
        try:
            output.append(f"\n{'='*60}")
            output.append(f"FILE: {f}")
            output.append('='*60)
            wb = xlrd.open_workbook(f)
            for sheet in wb.sheets():
                output.append(f"\n--- Sheet: {sheet.name} ---")
                for row_idx in range(min(sheet.nrows, 80)):
                    row = []
                    for col_idx in range(min(sheet.ncols, 12)):
                        cell = sheet.cell(row_idx, col_idx)
                        val = cell.value
                        if isinstance(val, float):
                            row.append(f"{val:.4f}")
                        elif val:
                            row.append(str(val)[:40])
                        else:
                            row.append("")
                    if any(row):
                        output.append(" | ".join(row))
        except Exception as e:
            output.append(f"Error reading {f}: {e}")
    else:
        output.append(f"File not found: {f}")

with open('excel_data.txt', 'w', encoding='utf-8') as out:
    out.write('\n'.join(output))

print("Done! Check excel_data.txt")
